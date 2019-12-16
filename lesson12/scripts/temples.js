fetch('/lesson12/json/temples.json')
.then(function (response){
    return response.json();
})
.then(function (temples){
    document.querySelector("#NameB")
    .innerHTML = temples[0].Temple;

    document.querySelector("#BuiltB")
    .innerHTML = temples[0].yearBuilt;

    document.querySelector("#locationB")
    .innerHTML = temples[0].Location;

    document.querySelector("#GroundB")
    .innerHTML = temples[0].groundBreaking;

    document.querySelector("#AnnouncedB")
    .innerHTML = temples[0].announced;

    document.querySelector("#StreetB")
    .innerHTML = temples[0].Address.Street;

    document.querySelector("#CityB")
    .innerHTML = temples[0].Address.City;

    document.querySelector("#zipB")
    .innerHTML = temples[0].Address.Zip;

    document.querySelector("#TelephoneB")
    .innerHTML = temples[0].Telephone;

    //Services Begin

    document.querySelector("#Services1B")
    .innerHTML = temples[0].Services.service1;

    document.querySelector("#Services2B")
    .innerHTML = temples[0].Services.service2;

    document.querySelector("#Services3B")
    .innerHTML = temples[0].Services.service3;

    document.querySelector("#Services4B")
    .innerHTML = temples[0].Services.service4;
    
    //Services End

    //Ordinances Begin

    document.querySelector("#Ordinance1B")
    .innerHTML = temples[0].Ordinances.sealing;

    document.querySelector("#Ordinance2B")
    .innerHTML = temples[0].Ordinances.baptism;

    document.querySelector("#Ordinance3B")
    .innerHTML = temples[0].Ordinances.initiatory;


    //Ordinances End

    //Session Begins

    document.querySelector("#Endowment1B")
    .innerHTML = temples[0].Endowments.endowment1;

    document.querySelector("#Endowment2B")
    .innerHTML = temples[0].Endowments.endowment2;

    document.querySelector("#Endowment3B")
    .innerHTML = temples[0].Endowments.endowment3;

    document.querySelector("#Endowment4B")
    .innerHTML = temples[0].Endowments.endowment4;

    document.querySelector("#Endowment5B")
    .innerHTML = temples[0].Endowments.endowment5;

    document.querySelector("#Endowment6B")
    .innerHTML = temples[0].Endowments.endowment6;

    document.querySelector("#Endowment7B")
    .innerHTML = temples[0].Endowments.endowment7;

    document.querySelector("#Endowment8B")
    .innerHTML = temples[0].Endowments.endowment8;

    document.querySelector("#Endowment9B")
    .innerHTML = temples[0].Endowments.endowment9;

    //Session Ends

    //Closures Begin

    document.querySelector("#Closures1B")
    .innerHTML = temples[0].Closures.closure1;

    document.querySelector("#Closures2B")
    .innerHTML = temples[0].Closures.closure2;

    document.querySelector("#Closures3B")
    .innerHTML = temples[0].Closures.closure3;

    document.querySelector("#Closures4B")
    .innerHTML = temples[0].Closures.closure4;

    document.querySelector("#Closures5B")
    .innerHTML = temples[0].Closures.closure5;

    document.querySelector("#Closures6B")
    .innerHTML = temples[0].Closures.closure6;

    document.querySelector("#Closures7B")
    .innerHTML = temples[0].Closures.closure7;

    document.querySelector("#Closures8B")
    .innerHTML = temples[0].Closures.closure8;

    document.querySelector("#Closures9B")
    .innerHTML = temples[0].Closures.closure9;

    document.querySelector("#Closures10B")
    .innerHTML = temples[0].Closures.closure10;

    document.querySelector("#Closures11B")
    .innerHTML = temples[0].Closures.closure11;

    document.querySelector("#Closures12B")
    .innerHTML = temples[0].Closures.closure12;

    document.querySelector("#Closures13B")
    .innerHTML = temples[0].Closures.closure13;
    document.querySelector("#Closures14B")
    .innerHTML = temples[0].Closures.closure14;

    document.querySelector("#Closures15B")
    .innerHTML = temples[0].Closures.closure15;

    document.querySelector("#Closures16B")
    .innerHTML = temples[0].Closures.closure16;

    document.querySelector("#Closures17B")
    .innerHTML = temples[0].Closures.closure17;


    //End of Closures
    





    //COLUMBIA RIVER TEMPLE
        document.querySelector("#NameC")
        .innerHTML = temples[1].Temple;
    
        document.querySelector("#BuiltC")
        .innerHTML = temples[1].yearBuilt;
    
        document.querySelector("#locationC")
        .innerHTML = temples[1].Location;
    
        document.querySelector("#GroundC")
        .innerHTML = temples[1].groundBreaking;
    
        document.querySelector("#AnnouncedC")
        .innerHTML = temples[1].announced;
    
        document.querySelector("#StreetC")
        .innerHTML = temples[1].Address.Street;
    
        document.querySelector("#CityC")
        .innerHTML = temples[1].Address.City;
    
        document.querySelector("#zipC")
        .innerHTML = temples[1].Address.Zip;
    
        document.querySelector("#TelephoneC")
        .innerHTML = temples[1].Telephone;
    
        //Services Begin
    
        document.querySelector("#Services1C")
        .innerHTML = temples[1].Services.service2;
    
        document.querySelector("#Services2C")
        .innerHTML = temples[1].Services.service2;
    
        document.querySelector("#Services3C")
        .innerHTML = temples[1].Services.service3;
    
        document.querySelector("#Services4C")
        .innerHTML = temples[1].Services.service4;
        
        //Services End
    
        //Ordinances Begin
    
        document.querySelector("#Ordinance1C")
        .innerHTML = temples[1].Ordinances.sealing;
    
        document.querySelector("#Ordinance2C")
        .innerHTML = temples[1].Ordinances.baptism;
    
        document.querySelector("#Ordinance3C")
        .innerHTML = temples[1].Ordinances.initiatory;
    
    
        //Ordinances End
    
        //Session Begins
    
        document.querySelector("#Endowment1C")
        .innerHTML = temples[1].Endowments.endowment1;
    
        document.querySelector("#Endowment2C")
        .innerHTML = temples[1].Endowments.endowment2;
    
        document.querySelector("#Endowment3C")
        .innerHTML = temples[1].Endowments.endowment3;
    
        document.querySelector("#Endowment4C")
        .innerHTML = temples[1].Endowments.endowment4;
        //Session Ends
    
        //Closures Begin
    
        document.querySelector("#Closures1C")
        .innerHTML = temples[1].Closures.closure1;
    
        document.querySelector("#Closures2C")
        .innerHTML = temples[1].Closures.closure2;
    
        document.querySelector("#Closures3C")
        .innerHTML = temples[1].Closures.closure3;
    
        document.querySelector("#Closures4C")
        .innerHTML = temples[1].Closures.closure4;
    
        document.querySelector("#Closures5C")
        .innerHTML = temples[1].Closures.closure5;
    
        document.querySelector("#Closures6C")
        .innerHTML = temples[1].Closures.closure6;
    
        document.querySelector("#Closures7C")
        .innerHTML = temples[1].Closures.closure7;
    
        document.querySelector("#Closures8C")
        .innerHTML = temples[1].Closures.closure8;
    
        document.querySelector("#Closures9C")
        .innerHTML = temples[1].Closures.closure9;
    
        document.querySelector("#Closures11C")
        .innerHTML = temples[1].Closures.closure11;
    
        document.querySelector("#Closures11C")
        .innerHTML = temples[1].Closures.closure11;
    
        document.querySelector("#Closures12C")
        .innerHTML = temples[1].Closures.closure12;
    
        document.querySelector("#Closures13C")
        .innerHTML = temples[1].Closures.closure13;

    
        //End of Closures


        //BISMARCK TEMPLE
        document.querySelector("#NameBI")
        .innerHTML = temples[2].Temple;
    
        document.querySelector("#BuiltBI")
        .innerHTML = temples[2].yearBuilt;
    
        document.querySelector("#locationBI")
        .innerHTML = temples[2].Location;
    
        document.querySelector("#GroundBI")
        .innerHTML = temples[2].groundBreaking;
    
        document.querySelector("#AnnouncedBI")
        .innerHTML = temples[2].announced;
    
        document.querySelector("#StreetBI")
        .innerHTML = temples[2].Address.Street;
    
        document.querySelector("#CityBI")
        .innerHTML = temples[2].Address.City;
    
        document.querySelector("#zipBI")
        .innerHTML = temples[2].Address.Zip;
    
        document.querySelector("#TelephoneBI")
        .innerHTML = temples[2].Telephone;
    
        //Services Begin
    
        document.querySelector("#Services1BI")
        .innerHTML = temples[2].Services.service2;
    
        document.querySelector("#Services2BI")
        .innerHTML = temples[2].Services.service2;
    
        document.querySelector("#Services3BI")
        .innerHTML = temples[2].Services.service3;
    
        document.querySelector("#Services4BI")
        .innerHTML = temples[2].Services.service4;
        
        //Services End
    
        //Ordinances Begin
    
        document.querySelector("#Ordinance1BI")
        .innerHTML = temples[2].Ordinances.sealing;

        document.querySelector("#Ordinance2BI")
        .innerHTML = temples[2].Ordinances.sealing2;
    
        document.querySelector("#Ordinance3BI")
        .innerHTML = temples[2].Ordinances.baptism;

        document.querySelector("#Ordinance4BI")
        .innerHTML = temples[2].Ordinances.baptism2;
    
        document.querySelector("#Ordinance5BI")
        .innerHTML = temples[2].Ordinances.initiatory;
    
    
        //Ordinances End
    
        //Session Begins
    
        document.querySelector("#Endowment1BI")
        .innerHTML = temples[2].Endowments.endowment1;
    
        document.querySelector("#Endowment2BI")
        .innerHTML = temples[2].Endowments.endowment2;
        //Session Ends
    
        //Closures Begin
        
        document.querySelector("#Closures1BI")
        .innerHTML = temples[2].Closures.closure1;
    
        document.querySelector("#Closures2BI")
        .innerHTML = temples[2].Closures.closure2;
    
        document.querySelector("#Closures3BI")
        .innerHTML = temples[2].Closures.closure3;
    
        document.querySelector("#Closures4BI")
        .innerHTML = temples[2].Closures.closure4;
    
        document.querySelector("#Closures5BI")
        .innerHTML = temples[2].Closures.closure5;
    
        document.querySelector("#Closures6BI")
        .innerHTML = temples[2].Closures.closure6;
    
        document.querySelector("#Closures7BI")
        .innerHTML = temples[2].Closures.closure7;
    
        document.querySelector("#Closures8BI")
        .innerHTML = temples[2].Closures.closure8;
    
        document.querySelector("#Closures9BI")
        .innerHTML = temples[2].Closures.closure9;
        //End of Closures



//OAKLAND TEMPLE

        document.querySelector("#NameO")
        .innerHTML = temples[3].Temple;
    
        document.querySelector("#BuiltO")
        .innerHTML = temples[3].yearBuilt;
    
        document.querySelector("#locationO")
        .innerHTML = temples[3].Location;
    
        document.querySelector("#GroundO")
        .innerHTML = temples[3].groundBreaking;
    
        document.querySelector("#AnnouncedO")
        .innerHTML = temples[3].announced;
    
        document.querySelector("#StreetO")
        .innerHTML = temples[3].Address.Street;
    
        document.querySelector("#CityO")
        .innerHTML = temples[3].Address.City;
    
        document.querySelector("#zipO")
        .innerHTML = temples[3].Address.Zip;
    
        document.querySelector("#TelephoneO")
        .innerHTML = temples[3].Telephone;
    
        //Services Begin

        document.querySelector("#Services1O")
        .innerHTML = temples[3].Services.service1;
    
        document.querySelector("#Services2O")
        .innerHTML = temples[3].Services.service2;
    
        document.querySelector("#Services3O")
        .innerHTML = temples[3].Services.service3;
    
        document.querySelector("#Services4O")
        .innerHTML = temples[3].Services.service4;
        
        //Services End
    
        //Ordinances Begin
    
        document.querySelector("#Ordinance1O")
        .innerHTML = temples[3].Ordinances.sealing;
    
        document.querySelector("#Ordinance2O")
        .innerHTML = temples[3].Ordinances.baptism1;

        document.querySelector("#Ordinance3O")
        .innerHTML = temples[3].Ordinances.baptism2;
    
        document.querySelector("#Ordinance4O")
        .innerHTML = temples[3].Ordinances.initiatory1;
    
    
        //Ordinances End
    
        //Session Begins
    
        document.querySelector("#Endowment1O")
        .innerHTML = temples[3].Endowments.endowment1;
    
        document.querySelector("#Endowment2O")
        .innerHTML = temples[3].Endowments.endowment2;

        document.querySelector("#Endowment3O")
        .innerHTML = temples[3].Endowments.endowment3;

        document.querySelector("#Endowment4O")
        .innerHTML = temples[3].Endowments.endowment4;

        document.querySelector("#Endowment5O")
        .innerHTML = temples[3].Endowments.endowment5;
        //Session Ends
    
        //Closures Begin
    
        document.querySelector("#Closures1O")
        .innerHTML = temples[3].Closures.closure1;
    
        document.querySelector("#Closures2O")
        .innerHTML = temples[3].Closures.closure2;
    
        document.querySelector("#Closures3O")
        .innerHTML = temples[3].Closures.closure3;
    
        document.querySelector("#Closures4O")
        .innerHTML = temples[3].Closures.closure4;
    
        document.querySelector("#Closures5O")
        .innerHTML = temples[3].Closures.closure5;
    
        document.querySelector("#Closures6O")
        .innerHTML = temples[3].Closures.closure6;
    
        document.querySelector("#Closures7O")
        .innerHTML = temples[3].Closures.closure7;
    
        document.querySelector("#Closures8O")
        .innerHTML = temples[3].Closures.closure8;
    
        document.querySelector("#Closures9O")
        .innerHTML = temples[3].Closures.closure9;

        document.querySelector("#Closures10O")
        .innerHTML = temples[3].Closures.closure10;
        //End of Closures









        //PORTLAND TEMPLE
        document.querySelector("#NameP")
        .innerHTML = temples[4].Temple;
    
        document.querySelector("#BuiltP")
        .innerHTML = temples[4].yearBuilt;
    
        document.querySelector("#locationP")
        .innerHTML = temples[4].Location;
    
        document.querySelector("#GroundP")
        .innerHTML = temples[4].groundBreaking;
    
        document.querySelector("#AnnouncedP")
        .innerHTML = temples[4].announced;
    
        document.querySelector("#StreetP")
        .innerHTML = temples[4].Address.Street;
    
        document.querySelector("#CityP")
        .innerHTML = temples[4].Address.City;
    
        document.querySelector("#zipP")
        .innerHTML = temples[4].Address.Zip;
    
        document.querySelector("#TelephoneP")
        .innerHTML = temples[4].Telephone;
    
        //Services Begin

        document.querySelector("#Services1P")
        .innerHTML = temples[4].Services.service1;
    
        document.querySelector("#Services2P")
        .innerHTML = temples[4].Services.service2;
    
        document.querySelector("#Services3P")
        .innerHTML = temples[4].Services.service3;
    
        document.querySelector("#Services4P")
        .innerHTML = temples[4].Services.service4;
        
        //Services End
    
        //Ordinances Begin
    
        document.querySelector("#Ordinance1P")
        .innerHTML = temples[4].Ordinances.sealing;
    
        document.querySelector("#Ordinance2P")
        .innerHTML = temples[4].Ordinances.baptism1;

        document.querySelector("#Ordinance3P")
        .innerHTML = temples[4].Ordinances.baptism2;

        document.querySelector("#Ordinance4P")
        .innerHTML = temples[4].Ordinances.baptism3;
    
        document.querySelector("#Ordinance5P")
        .innerHTML = temples[4].Ordinances.initiatory1;
    
    
        //Ordinances End
    
        //Session Begins
    
        document.querySelector("#Endowment1P")
        .innerHTML = temples[4].Endowments.endowment1;
    
        document.querySelector("#Endowment2P")
        .innerHTML = temples[4].Endowments.endowment2;

        document.querySelector("#Endowment3P")
        .innerHTML = temples[4].Endowments.endowment3;

        document.querySelector("#Endowment4P")
        .innerHTML = temples[4].Endowments.endowment4;
        //Session Ends
    
        //Closures Begin
    
        document.querySelector("#Closures1P")
        .innerHTML = temples[4].Closures.closure1;
    
        document.querySelector("#Closures2P")
        .innerHTML = temples[4].Closures.closure2;
    
        document.querySelector("#Closures3P")
        .innerHTML = temples[4].Closures.closure3;
    
        document.querySelector("#Closures4P")
        .innerHTML = temples[4].Closures.closure4;
    
        document.querySelector("#Closures5P")
        .innerHTML = temples[4].Closures.closure5;
    
        document.querySelector("#Closures6P")
        .innerHTML = temples[4].Closures.closure6;
    
        document.querySelector("#Closures7P")
        .innerHTML = temples[4].Closures.closure7;
    
        document.querySelector("#Closures8P")
        .innerHTML = temples[4].Closures.closure8;
    
        document.querySelector("#Closures9P")
        .innerHTML = temples[4].Closures.closure9;

        document.querySelector("#Closures10P")
        .innerHTML = temples[4].Closures.closure10;

        document.querySelector("#Closures11P")
        .innerHTML = temples[4].Closures.closure11;

        document.querySelector("#Closures12P")
        .innerHTML = temples[4].Closures.closure12;

        document.querySelector("#Closures13P")
        .innerHTML = temples[4].Closures.closure13;

        document.querySelector("#Closures14P")
        .innerHTML = temples[4].Closures.closure14;

        document.querySelector("#Closures15P")
        .innerHTML = temples[4].Closures.closure15;

        //End of Closures




        //SPOKANE TEMPLE


        document.querySelector("#NameS")
        .innerHTML = temples[5].Temple;
    
        document.querySelector("#BuiltS")
        .innerHTML = temples[5].yearBuilt;
    
        document.querySelector("#locationS")
        .innerHTML = temples[5].Location;
    
        document.querySelector("#GroundS")
        .innerHTML = temples[5].groundBreaking;
    
        document.querySelector("#AnnouncedS")
        .innerHTML = temples[5].announced;
    
        document.querySelector("#StreetS")
        .innerHTML = temples[5].Address.Street;
    
        document.querySelector("#CityS")
        .innerHTML = temples[5].Address.City;
    
        document.querySelector("#zipS")
        .innerHTML = temples[5].Address.Zip;
    
        document.querySelector("#TelephoneS")
        .innerHTML = temples[5].Telephone;
    
        //Services Begin

        document.querySelector("#Services1S")
        .innerHTML = temples[5].Services.service1;
    
        document.querySelector("#Services2S")
        .innerHTML = temples[5].Services.service2;
    
        document.querySelector("#Services3S")
        .innerHTML = temples[5].Services.service3;
    
        document.querySelector("#Services4S")
        .innerHTML = temples[5].Services.service4;
        
        //Services End
    
        //Ordinances Begin
    
        document.querySelector("#Ordinance1S")
        .innerHTML = temples[5].Ordinances.sealing1;

        document.querySelector("#Ordinance2S")
        .innerHTML = temples[5].Ordinances.sealing2;

        document.querySelector("#Ordinance3S")
        .innerHTML = temples[5].Ordinances.sealing3;
    
        document.querySelector("#Ordinance4S")
        .innerHTML = temples[5].Ordinances.baptism1;

        document.querySelector("#Ordinance5S")
        .innerHTML = temples[5].Ordinances.baptism2;

        document.querySelector("#Ordinance6S")
        .innerHTML = temples[5].Ordinances.baptism3;
    
        document.querySelector("#Ordinance7S")
        .innerHTML = temples[5].Ordinances.initiatory1;

        document.querySelector("#Ordinance8S")
        .innerHTML = temples[5].Ordinances.initiatory2;
    
    
        //Ordinances End
    
        //Session Begins
    
        document.querySelector("#Endowment1S")
        .innerHTML = temples[5].Endowments.endowment1;
    
        document.querySelector("#Endowment2S")
        .innerHTML = temples[5].Endowments.endowment2;

        document.querySelector("#Endowment3S")
        .innerHTML = temples[5].Endowments.endowment3;

        //Session Ends
    
        //Closures Begin
    
        document.querySelector("#Closures1S")
        .innerHTML = temples[5].Closures.closure1;
    
        document.querySelector("#Closures2S")
        .innerHTML = temples[5].Closures.closure2;
    
        document.querySelector("#Closures3S")
        .innerHTML = temples[5].Closures.closure3;
    
        document.querySelector("#Closures4S")
        .innerHTML = temples[5].Closures.closure4;
    
        document.querySelector("#Closures5S")
        .innerHTML = temples[5].Closures.closure5;
    
        document.querySelector("#Closures6S")
        .innerHTML = temples[5].Closures.closure6;
    
        document.querySelector("#Closures7S")
        .innerHTML = temples[5].Closures.closure7;
    
        document.querySelector("#Closures8S")
        .innerHTML = temples[5].Closures.closure8;
    
        document.querySelector("#Closures9S")
        .innerHTML = temples[5].Closures.closure9;

        document.querySelector("#Closures10S")
        .innerHTML = temples[5].Closures.closure10;

        document.querySelector("#Closures11S")
        .innerHTML = temples[5].Closures.closure11;

        document.querySelector("#Closures12S")
        .innerHTML = temples[5].Closures.closure12;

        document.querySelector("#Closures13S")
        .innerHTML = temples[5].Closures.closure13;

        //End of Closures
    }) 