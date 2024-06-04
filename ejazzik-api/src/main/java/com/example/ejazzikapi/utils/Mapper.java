package com.example.ejazzikapi.utils;

import com.example.ejazzikapi.entity.AccommodationEntity;
import com.example.ejazzikapi.entity.AttendantEntity;
import com.example.ejazzikapi.entity.AttractionEntity;
import com.example.ejazzikapi.entity.FlightEntity;
import com.example.ejazzikapi.entity.ParticipantEntity;
import com.example.ejazzikapi.entity.ReservationEntity;
import com.example.ejazzikapi.entity.TripAttractionEntity;
import com.example.ejazzikapi.entity.TripEntity;
import com.example.ejazzikapi.model.Accommodation;
import com.example.ejazzikapi.model.Attendant;
import com.example.ejazzikapi.model.Attraction;
import com.example.ejazzikapi.model.Flight;
import com.example.ejazzikapi.model.Participant;
import com.example.ejazzikapi.model.Reservation;
import com.example.ejazzikapi.model.Trip;
import com.example.ejazzikapi.repository.AccommodationRepository;
import com.example.ejazzikapi.repository.AttendantRepository;
import com.example.ejazzikapi.repository.AttractionRepository;
import com.example.ejazzikapi.repository.FlightRepository;
import com.example.ejazzikapi.repository.ParticipantRepository;
import com.example.ejazzikapi.repository.TripAttractionRepository;
import com.example.ejazzikapi.repository.TripRepository;
import com.example.ejazzikapi.request.reservation.ParticipantInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class Mapper {

    @Autowired
    private TripRepository tripRepository;
    @Autowired
    private AttendantRepository attendantRepository;
    @Autowired
    private ParticipantRepository participantRepository;
    @Autowired
    private AccommodationRepository accommodationRepository;
    @Autowired
    private FlightRepository flightRepository;
    @Autowired
    private TripAttractionRepository tripAttractionRepository;
    @Autowired
    private AttractionRepository attractionRepository;

    public ParticipantEntity mapParticipantToEntity(ParticipantInfo participant, Integer reservationId) {
        ParticipantEntity participantEntity = new ParticipantEntity();
        participantEntity.setFirstName(participant.getFistName());
        participantEntity.setLastName(participant.getLastName());
        participantEntity.setEmail(participant.getEmail());
        participantEntity.setPesel(participant.getPesel());
        participantEntity.setPassportNumber(participant.getPassportNumber());
        participantEntity.setBirthDate(participant.getBirthDate());
        participantEntity.setReservationId(reservationId);
        return participantEntity;
    }

    public Reservation mapToReservation(ReservationEntity entity) {
        List<ParticipantEntity> participantEntities = participantRepository.findAllByReservationId(entity.getReservationId());
        AttendantEntity attendantEntity = attendantRepository.findById(entity.getAttendantId()).get();
        TripEntity tripEntity = tripRepository.findById(entity.getTripId()).get();

        Reservation reservation = new Reservation();
        reservation.setReservationId(entity.getReservationId());
        reservation.setUserId(entity.getUserId());
        reservation.setAttendant(mapToAttendant(attendantEntity));
        reservation.setTrip(mapToTrip(tripEntity));
        reservation.setParticipants(participantEntities.stream().map(this::mapToParticipant).collect(Collectors.toList()));
        reservation.setBuyDate(entity.getBuyDate());
        return reservation;
    }

    public Attendant mapToAttendant(AttendantEntity entity) {
        Attendant attendant = new Attendant();
        attendant.setAttendantId(entity.getAttendantId());
        attendant.setFirstName(entity.getFirstName());
        attendant.setLastName(entity.getLastName());
        attendant.setEmail(entity.getEmail());
        attendant.setPhoneNumber(entity.getPhoneNumber());
        return attendant;
    }

    public Trip mapToTrip(TripEntity entity) {
        AccommodationEntity accommodationEntity = accommodationRepository.findById(entity.getAccommodationId()).get();
        FlightEntity flightArrivalEntity = flightRepository.findById(entity.getFlightArrivalId()).get();
        FlightEntity flightDepartureEntity = flightRepository.findById(entity.getFlightDepartureId()).get();
        List<TripAttractionEntity> tripAttractionEntities = tripAttractionRepository.findAllByTripId(entity.getTripId());
        List<AttractionEntity> attractionEntities = tripAttractionEntities.stream()
                .map(tripAttr -> attractionRepository.findById(tripAttr.getAttractionId()))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .collect(Collectors.toList());

        double pricePerPerson = getTotalTripPrice(flightArrivalEntity, flightDepartureEntity,
                accommodationEntity, attractionEntities);
        double priceInTotal = (pricePerPerson + entity.getProvision()) * entity.getNumberOfPeople();

        Trip trip = new Trip();
        trip.setTripId(entity.getTripId());
        trip.setAccommodation(mapToAccommodation(accommodationEntity));
        trip.setFlightArrival(mapToFlight(flightArrivalEntity));
        trip.setFlightDeparture(mapToFlight(flightDepartureEntity));
        trip.setAttractions(attractionEntities.stream().map(this::mapToAttraction).collect(Collectors.toList()));
        trip.setName(entity.getName());
        trip.setDescription(entity.getDescription());
        trip.setCountry(entity.getCountry());
        trip.setCity(entity.getCity());
        trip.setDate(entity.getDate());
        trip.setPricePerPerson(entity.getPricePerPerson());
        trip.setNumberOfPeople(entity.getNumberOfPeople());
        trip.setProvision(entity.getProvision());
        trip.setTotalPrice(priceInTotal);

        return trip;
    }

    public Participant mapToParticipant(ParticipantEntity entity) {
        Participant participant = new Participant();
        participant.setParticipantId(entity.getParticipantId());
        participant.setReservationId(entity.getReservationId());
        participant.setFistName(entity.getFirstName());
        participant.setLastName(entity.getLastName());
        participant.setEmail(entity.getEmail());
        participant.setPesel(entity.getPesel());
        participant.setBirthDate(entity.getBirthDate());
        participant.setPassportNumber(entity.getPassportNumber());
        return participant;
    }

    public Accommodation mapToAccommodation(AccommodationEntity entity) {
        Accommodation accommodation = new Accommodation();
        accommodation.setAccommodationId(entity.getAccommodationId());
        accommodation.setName(entity.getName());
        accommodation.setDescription(entity.getDescription());
        accommodation.setAddress(entity.getAddress());
        accommodation.setMaxPeople(entity.getMaxPeople());
        accommodation.setStandard(entity.getStandard());
        accommodation.setPhoneNumber(entity.getPhoneNumber());
        accommodation.setPrice(entity.getPrice());
        return accommodation;
    }

    public Flight mapToFlight(FlightEntity entity) {
        Flight flight = new Flight();
        flight.setFlightId(entity.getFlightId());
        flight.setAirportDeparture(entity.getAirportDeparture());
        flight.setDateDeparture(entity.getDateDeparture());
        flight.setTimeDeparture(entity.getTimeDeparture());
        flight.setCarrier(entity.getCarrier());
        flight.setAirportArrival(entity.getAirportArrival());
        flight.setDateArrival(entity.getDateArrival());
        flight.setTimeArrival(entity.getTimeArrival());
        flight.setLuggage(entity.getLuggage());
        flight.setStandard(entity.getStandard());
        flight.setPrice(entity.getPrice());
        return flight;
    }

    public Attraction mapToAttraction(AttractionEntity entity) {
        Attraction attraction = new Attraction();
        attraction.setAttractionId(entity.getAttractionId());
        attraction.setName(entity.getName());
        attraction.setDescription(entity.getDescription());
        attraction.setAddress(entity.getAddress());
        attraction.setPhoneNumber(entity.getPhoneNumber());
        attraction.setPrice(entity.getPrice());
        return attraction;
    }

    private double getTotalTripPrice(FlightEntity flightArrivalEntity, FlightEntity flightDepartureEntity,
                              AccommodationEntity accommodationEntity, List<AttractionEntity> attractionEntities) {
        double attractionsPricePerPersona = 0;
        for (AttractionEntity attraction : attractionEntities) {
            attractionsPricePerPersona += attraction.getPrice();
        }
        return attractionsPricePerPersona + flightArrivalEntity.getPrice() +
                flightDepartureEntity.getPrice() + accommodationEntity.getPrice();
    }
}
