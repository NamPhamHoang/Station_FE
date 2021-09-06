export const stationModel = {
    address: {
        address: "",
        postcode: ""
    },
    fare: {
        AlwaysShowOysterCardFields: "",
        OystercardIssued: "",
        // PenaltyFares: dataStation.Fares.PenaltyFares.Url._text,
        // SmartcardIssued: dataStation.Fares.SmartcardIssued._text,
        SmartcardValidator: "",
        TicketMachine: "",
        TicketOffice: "",
        UseOystercard: "",
    },
    generalServiceInform: {
        CustomerService: "",
        LeftLuggage: "",
        LostProperty: "",
        Contact:  "",
    },
    firstClassInformation: {
        lounge: "",
    },
    StationFacilities: {
        AtmMachine: "",
        BabyChange: "",
        BureauDeChange: "",
        FirstClassLounge: "",
        PostBox: "",
        SeatedArea: "",
        Shops: "",
        Showers: "",
        StationBuffet: "",
        Telephones:"",
        Toilets: "",
        TouristInformation: "",
        Trolleys: "",
        WaitingRoom:"",
        WebKiosk: "",
        WiFi: "",
        Cashpoint: "",
        Refreshment: "",
    },
    Accessibility: {
        AccessibleTicketMachines: "",
        HeightAdjustedTicketOfficeCounter:"",
        Helpline: "",
        ImpairedMobilitySetDown: "",
        InductionLoop:"",
        NationalKeyToilets: "",
        RampForTrainAccess: "",
        StaffHelpAvailable: "",
        StepFreeAccess: "",
        WheelchairsAvailable: "",
    },
    Interchange: {
        CarPark: {
            AccessibleCarParkEquipment: "",
            Cctv: "",
            Charges: "",
            Name:"",
            NumberAccessibleSpaces: "",
            Spaces: "",
        },
        CycleStorage: {
            Cctv: "",
            Sheltered: "",
            Spaces: "",
        },
        RailReplacementServices: {
            note: "",
        },
        TaxiRank: {
            note: "",
        }
    }
}