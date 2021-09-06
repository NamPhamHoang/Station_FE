export const detectStationProperties = (station) => {
    const dataStation = station["StationV4.0"];
    return {
        address: {
            address: dataStation.Address["com:PostalAddress"]["add:A_5LineAddress"]["add:Line"],
            postcode: dataStation.Address["com:PostalAddress"]["add:A_5LineAddress"]["add:PostCode"]._text
        },
        fare: {
            AlwaysShowOysterCardFields: dataStation.Fares.AlwaysShowOysterCardFields._text,
            OystercardIssued: dataStation.Fares.OystercardIssued._text,
            // PenaltyFares: dataStation.Fares.PenaltyFares.Url._text,
            // SmartcardIssued: dataStation.Fares.SmartcardIssued._text,
            SmartcardValidator: dataStation.Fares.SmartcardValidator._text,
            TicketMachine: dataStation.Fares.TicketMachine.Available._text,
            TicketOffice: dataStation.Fares.TicketOffice["com:Available"]._text,
            UseOystercard: dataStation.Fares.UseOystercard._text,
        },
        generalServiceInform: {
            CustomerService: dataStation.PassengerServices.CustomerService["com:Annotation"]["com:Note"]._cdata,
            LeftLuggage: dataStation.PassengerServices.LeftLuggage["com:Available"]._text,
            LostProperty: dataStation.PassengerServices.LostProperty["com:Available"]._text,
            Contact:  dataStation.PassengerServices.LostProperty["com:ContactDetails"]["com:PrimaryTelephoneNumber"]["com:TelNationalNumber"]._text
        },
        firstClassInformation: {
            lounge: dataStation.StationFacilities.FirstClassLounge["com:Available"]._text,
        },
        StationFacilities: {
            AtmMachine: dataStation.StationFacilities.AtmMachine["com:Available"]._text,
            BabyChange: dataStation.StationFacilities.BabyChange["com:Available"]._text,
            BureauDeChange: dataStation.StationFacilities.BureauDeChange["com:Available"]._text,
            FirstClassLounge: dataStation.StationFacilities.FirstClassLounge["com:Available"]._text,
            PostBox: dataStation.StationFacilities.PostBox["com:Available"]._text,
            SeatedArea: dataStation.StationFacilities.SeatedArea["com:Available"]._text,
            Shops: dataStation.StationFacilities.Shops["com:Available"]._text,
            Showers: dataStation.StationFacilities.Showers["com:Available"]._text,
            StationBuffet: dataStation.StationFacilities.StationBuffet["com:Available"]._text,
            Telephones: dataStation.StationFacilities.Telephones["com:Exists"]._text,
            Toilets: dataStation.StationFacilities.Toilets["com:Available"]._text,
            TouristInformation: dataStation.StationFacilities.TouristInformation["com:Available"]._text,
            Trolleys: dataStation.StationFacilities.Trolleys["com:Available"]._text,
            WaitingRoom: dataStation.StationFacilities.WaitingRoom["com:Available"]._text,
            WebKiosk: dataStation.StationFacilities.WebKiosk["com:Available"]._text,
            WiFi: dataStation.StationFacilities.WiFi["com:Available"]._text,
            Cashpoint: "false",
            Refreshment: "false"
        },
        Accessibility: {
            AccessibleTicketMachines: dataStation.Accessibility.AccessibleTicketMachines["com:Available"]._text,
            HeightAdjustedTicketOfficeCounter: dataStation.Accessibility.HeightAdjustedTicketOfficeCounter["com:Available"]._text,
            Helpline: dataStation.Accessibility.Helpline["com:Open"]["com:DayAndTimeAvailability"]["com:DayTypes"]["com:MondayToSunday"]._text,
            ImpairedMobilitySetDown: dataStation.Accessibility.ImpairedMobilitySetDown["com:Available"]._text,
            InductionLoop: dataStation.Accessibility.InductionLoop._text,
            NationalKeyToilets: dataStation.Accessibility.NationalKeyToilets["com:Available"]._text,
            RampForTrainAccess: dataStation.Accessibility.RampForTrainAccess["com:Available"]._text,
            StaffHelpAvailable: dataStation.Accessibility.StaffHelpAvailable["com:Available"]._text,
            StepFreeAccess: dataStation.Accessibility.StepFreeAccess.Coverage._text,
            WheelchairsAvailable: dataStation.Accessibility.WheelchairsAvailable["com:Available"]._text,
        },
        Interchange: {
            CarPark: {
                AccessibleCarParkEquipment: dataStation.Interchange.CarPark.AccessibleCarParkEquipment._text,
                Cctv: dataStation.Interchange.CarPark.Cctv._text,
                Charges: dataStation.Interchange.CarPark.Charges.Free._text,
                Name: dataStation.Interchange.CarPark.Name._cdata,
                NumberAccessibleSpaces: dataStation.Interchange.CarPark.NumberAccessibleSpaces._text,
                Spaces: dataStation.Interchange.CarPark.Spaces._text,
            },
            CycleStorage: {
                Cctv: dataStation.Interchange.CycleStorage.Cctv._text,
                Sheltered: dataStation.Interchange.CycleStorage.Sheltered._text,
                Spaces: dataStation.Interchange.CycleStorage.Spaces._text,
            },
            RailReplacementServices: {
                note: dataStation.Interchange.RailReplacementServices["com:Annotation"]["com:Note"]._cdata,
            },
            TaxiRank: {
                note: dataStation.Interchange.TaxiRank["com:Annotation"]["com:Note"]._cdata,
            }
        }
    }
}