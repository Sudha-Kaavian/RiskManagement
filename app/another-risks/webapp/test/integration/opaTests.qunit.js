sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/anotherrisks/test/integration/FirstJourney',
		'riskmanagement/anotherrisks/test/integration/pages/RisksList',
		'riskmanagement/anotherrisks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/anotherrisks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);