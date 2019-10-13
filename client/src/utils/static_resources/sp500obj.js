const sp500 = {

  getSybols: () => {
    let symbols = [];
    for (let i in sp500.stockList) {
      symbols.push(sp500.stockList[i]["Symbol"])
    }
    return symbols
  },

  buildStockObj: (sp500PriceArr) => {
    for (let i in sp500PriceArr){
      console.log(sp500PriceArr[i])
      sp500PriceArr[i].name = sp500.stockList[i]['Name']
      sp500PriceArr[i].sector = sp500.stockList[i]['Sector']
    }
  },

  stockList: [
        {
          "Symbol": "MMM",
          "Name": "3M Company",
          "Sector": "Industrials"
        },
        {
          "Symbol": "AOS",
          "Name": "A.O. Smith Corp",
          "Sector": "Industrials"
        },
        {
          "Symbol": "ABT",
          "Name": "Abbott Laboratories",
          "Sector": "Health Care"
        },
        {
          "Symbol": "ABBV",
          "Name": "AbbVie Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "ACN",
          "Name": "Accenture plc",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ATVI",
          "Name": "Activision Blizzard",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "AYI",
          "Name": "Acuity Brands Inc",
          "Sector": "Industrials"
        },
        {
          "Symbol": "ADBE",
          "Name": "Adobe Systems Inc",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "AAP",
          "Name": "Advance Auto Parts",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "AMD",
          "Name": "Advanced Micro Devices Inc",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "AES",
          "Name": "AES Corp",
          "Sector": "Utilities"
        },
        {
          "Symbol": "AET",
          "Name": "Aetna Inc",
          "Sector": "Health Care"
        },
        {
          "Symbol": "AMG",
          "Name": "Affiliated Managers Group Inc",
          "Sector": "Financials"
        },
        {
          "Symbol": "AFL",
          "Name": "AFLAC Inc",
          "Sector": "Financials"
        },
        {
          "Symbol": "A",
          "Name": "Agilent Technologies Inc",
          "Sector": "Health Care"
        },
        {
          "Symbol": "APD",
          "Name": "Air Products &amp; Chemicals Inc",
          "Sector": "Materials"
        },
        {
          "Symbol": "AKAM",
          "Name": "Akamai Technologies Inc",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ALK",
          "Name": "Alaska Air Group Inc",
          "Sector": "Industrials"
        },
        {
          "Symbol": "ALB",
          "Name": "Albemarle Corp",
          "Sector": "Materials"
        },
        {
          "Symbol": "ARE",
          "Name": "Alexandria Real Estate Equities Inc",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "ALXN",
          "Name": "Alexion Pharmaceuticals",
          "Sector": "Health Care"
        },
        {
          "Symbol": "ALGN",
          "Name": "Align Technology",
          "Sector": "Health Care"
        },
        {
          "Symbol": "ALLE",
          "Name": "Allegion",
          "Sector": "Industrials"
        },
        {
          "Symbol": "AGN",
          "Name": "Allergan, Plc",
          "Sector": "Health Care"
        },
        {
          "Symbol": "ADS",
          "Name": "Alliance Data Systems",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "LNT",
          "Name": "Alliant Energy Corp",
          "Sector": "Utilities"
        },
        {
          "Symbol": "ALL",
          "Name": "Allstate Corp",
          "Sector": "Financials"
        },
        {
          "Symbol": "GOOGL",
          "Name": "Alphabet Inc Class A",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "GOOG",
          "Name": "Alphabet Inc Class C",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "MO",
          "Name": "Altria Group Inc",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "AMZN",
          "Name": "Amazon.com Inc.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "AEE",
          "Name": "Ameren Corp",
          "Sector": "Utilities"
        },
        {
          "Symbol": "AAL",
          "Name": "American Airlines Group",
          "Sector": "Industrials"
        },
        {
          "Symbol": "AEP",
          "Name": "American Electric Power",
          "Sector": "Utilities"
        },
        {
          "Symbol": "AXP",
          "Name": "American Express Co",
          "Sector": "Financials"
        },
        {
          "Symbol": "AIG",
          "Name": "American International Group, Inc.",
          "Sector": "Financials"
        },
        {
          "Symbol": "AMT",
          "Name": "American Tower Corp A",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "AWK",
          "Name": "American Water Works Company Inc",
          "Sector": "Utilities"
        },
        {
          "Symbol": "AMP",
          "Name": "Ameriprise Financial",
          "Sector": "Financials"
        },
        {
          "Symbol": "ABC",
          "Name": "AmerisourceBergen Corp",
          "Sector": "Health Care"
        },
        {
          "Symbol": "AME",
          "Name": "AMETEK Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "AMGN",
          "Name": "Amgen Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "APH",
          "Name": "Amphenol Corp",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "APC",
          "Name": "Anadarko Petroleum Corp",
          "Sector": "Energy"
        },
        {
          "Symbol": "ADI",
          "Name": "Analog Devices, Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ANDV",
          "Name": "Andeavor",
          "Sector": "Energy"
        },
        {
          "Symbol": "ANSS",
          "Name": "ANSYS",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ANTM",
          "Name": "Anthem Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "AON",
          "Name": "Aon plc",
          "Sector": "Financials"
        },
        {
          "Symbol": "APA",
          "Name": "Apache Corporation",
          "Sector": "Energy"
        },
        {
          "Symbol": "AIV",
          "Name": "Apartment Investment &amp; Management",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "AAPL",
          "Name": "Apple Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "AMAT",
          "Name": "Applied Materials Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "APTV",
          "Name": "Aptiv Plc",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "ADM",
          "Name": "Archer-Daniels-Midland Co",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "ARNC",
          "Name": "Arconic Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "AJG",
          "Name": "Arthur J. Gallagher &amp; Co.",
          "Sector": "Financials"
        },
        {
          "Symbol": "AIZ",
          "Name": "Assurant Inc.",
          "Sector": "Financials"
        },
        {
          "Symbol": "T",
          "Name": "AT&amp;T Inc.",
          "Sector": "Telecommunication Services"
        },
        {
          "Symbol": "ADSK",
          "Name": "Autodesk Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ADP",
          "Name": "Automatic Data Processing",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "AZO",
          "Name": "AutoZone Inc",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "AVB",
          "Name": "AvalonBay Communities, Inc.",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "AVY",
          "Name": "Avery Dennison Corp",
          "Sector": "Materials"
        },
        {
          "Symbol": "BHGE",
          "Name": "Baker Hughes, a GE Company",
          "Sector": "Energy"
        },
        {
          "Symbol": "BLL",
          "Name": "Ball Corp",
          "Sector": "Materials"
        },
        {
          "Symbol": "BAC",
          "Name": "Bank of America Corp",
          "Sector": "Financials"
        },
        {
          "Symbol": "BAX",
          "Name": "Baxter International Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "BBT",
          "Name": "BB&amp;T Corporation",
          "Sector": "Financials"
        },
        {
          "Symbol": "BDX",
          "Name": "Becton Dickinson",
          "Sector": "Health Care"
        },
        {
          "Symbol": "BRK.B",
          "Name": "Berkshire Hathaway",
          "Sector": "Financials"
        },
        {
          "Symbol": "BBY",
          "Name": "Best Buy Co. Inc.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "BIIB",
          "Name": "Biogen Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "BLK",
          "Name": "BlackRock",
          "Sector": "Financials"
        },
        {
          "Symbol": "HRB",
          "Name": "Block H&amp;R",
          "Sector": "Financials"
        },
        {
          "Symbol": "BA",
          "Name": "Boeing Company",
          "Sector": "Industrials"
        },
        {
          "Symbol": "BKNG",
          "Name": "Booking Holdings Inc",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "BWA",
          "Name": "BorgWarner",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "BXP",
          "Name": "Boston Properties",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "BSX",
          "Name": "Boston Scientific",
          "Sector": "Health Care"
        },
        {
          "Symbol": "BHF",
          "Name": "Brighthouse Financial Inc",
          "Sector": "Financials"
        },
        {
          "Symbol": "BMY",
          "Name": "Bristol-Myers Squibb",
          "Sector": "Health Care"
        },
        {
          "Symbol": "AVGO",
          "Name": "Broadcom",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "BF.B",
          "Name": "Brown-Forman Corp.",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "CHRW",
          "Name": "C. H. Robinson Worldwide",
          "Sector": "Industrials"
        },
        {
          "Symbol": "CA",
          "Name": "CA, Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "COG",
          "Name": "Cabot Oil &amp; Gas",
          "Sector": "Energy"
        },
        {
          "Symbol": "CDNS",
          "Name": "Cadence Design Systems",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "CPB",
          "Name": "Campbell Soup",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "COF",
          "Name": "Capital One Financial",
          "Sector": "Financials"
        },
        {
          "Symbol": "CAH",
          "Name": "Cardinal Health Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "KMX",
          "Name": "Carmax Inc",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "CCL",
          "Name": "Carnival Corp.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "CAT",
          "Name": "Caterpillar Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "CBOE",
          "Name": "Cboe Global Markets",
          "Sector": "Financials"
        },
        {
          "Symbol": "CBRE",
          "Name": "CBRE Group",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "CBS",
          "Name": "CBS Corp.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "CELG",
          "Name": "Celgene Corp.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "CNC",
          "Name": "Centene Corporation",
          "Sector": "Health Care"
        },
        {
          "Symbol": "CNP",
          "Name": "CenterPoint Energy",
          "Sector": "Utilities"
        },
        {
          "Symbol": "CTL",
          "Name": "CenturyLink Inc",
          "Sector": "Telecommunication Services"
        },
        {
          "Symbol": "CERN",
          "Name": "Cerner",
          "Sector": "Health Care"
        },
        {
          "Symbol": "CF",
          "Name": "CF Industries Holdings Inc",
          "Sector": "Materials"
        },
        {
          "Symbol": "SCHW",
          "Name": "Charles Schwab Corporation",
          "Sector": "Financials"
        },
        {
          "Symbol": "CHTR",
          "Name": "Charter Communications",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "CVX",
          "Name": "Chevron Corp.",
          "Sector": "Energy"
        },
        {
          "Symbol": "CMG",
          "Name": "Chipotle Mexican Grill",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "CB",
          "Name": "Chubb Limited",
          "Sector": "Financials"
        },
        {
          "Symbol": "CHD",
          "Name": "Church &amp; Dwight",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "CI",
          "Name": "CIGNA Corp.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "XEC",
          "Name": "Cimarex Energy",
          "Sector": "Energy"
        },
        {
          "Symbol": "CINF",
          "Name": "Cincinnati Financial",
          "Sector": "Financials"
        },
        {
          "Symbol": "CTAS",
          "Name": "Cintas Corporation",
          "Sector": "Industrials"
        },
        {
          "Symbol": "CSCO",
          "Name": "Cisco Systems",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "C",
          "Name": "Citigroup Inc.",
          "Sector": "Financials"
        },
        {
          "Symbol": "CFG",
          "Name": "Citizens Financial Group",
          "Sector": "Financials"
        },
        {
          "Symbol": "CTXS",
          "Name": "Citrix Systems",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "CME",
          "Name": "CME Group Inc.",
          "Sector": "Financials"
        },
        {
          "Symbol": "CMS",
          "Name": "CMS Energy",
          "Sector": "Utilities"
        },
        {
          "Symbol": "KO",
          "Name": "Coca-Cola Company (The)",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "CTSH",
          "Name": "Cognizant Technology Solutions",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "CL",
          "Name": "Colgate-Palmolive",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "CMCSA",
          "Name": "Comcast Corp.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "CMA",
          "Name": "Comerica Inc.",
          "Sector": "Financials"
        },
        {
          "Symbol": "CAG",
          "Name": "Conagra Brands",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "CXO",
          "Name": "Concho Resources",
          "Sector": "Energy"
        },
        {
          "Symbol": "COP",
          "Name": "ConocoPhillips",
          "Sector": "Energy"
        },
        {
          "Symbol": "ED",
          "Name": "Consolidated Edison",
          "Sector": "Utilities"
        },
        {
          "Symbol": "STZ",
          "Name": "Constellation Brands",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "GLW",
          "Name": "Corning Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "COST",
          "Name": "Costco Wholesale Corp.",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "COTY",
          "Name": "Coty, Inc",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "CCI",
          "Name": "Crown Castle International Corp.",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "CSRA",
          "Name": "CSRA Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "CSX",
          "Name": "CSX Corp.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "CMI",
          "Name": "Cummins Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "CVS",
          "Name": "CVS Health",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "DHI",
          "Name": "D. R. Horton",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "DHR",
          "Name": "Danaher Corp.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "DRI",
          "Name": "Darden Restaurants",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "DVA",
          "Name": "DaVita Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "DE",
          "Name": "Deere &amp; Co.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "DAL",
          "Name": "Delta Air Lines Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "XRAY",
          "Name": "Dentsply Sirona",
          "Sector": "Health Care"
        },
        {
          "Symbol": "DVN",
          "Name": "Devon Energy Corp.",
          "Sector": "Energy"
        },
        {
          "Symbol": "DLR",
          "Name": "Digital Realty Trust Inc",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "DFS",
          "Name": "Discover Financial Services",
          "Sector": "Financials"
        },
        {
          "Symbol": "DISCA",
          "Name": "Discovery Inc. Class A",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "DISCK",
          "Name": "Discovery Inc. Class C",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "DISH",
          "Name": "Dish Network",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "DG",
          "Name": "Dollar General",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "DLTR",
          "Name": "Dollar Tree",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "D",
          "Name": "Dominion Energy",
          "Sector": "Utilities"
        },
        {
          "Symbol": "DOV",
          "Name": "Dover Corp.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "DWDP",
          "Name": "DowDuPont",
          "Sector": "Materials"
        },
        {
          "Symbol": "DPS",
          "Name": "Dr Pepper Snapple Group",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "DTE",
          "Name": "DTE Energy Co.",
          "Sector": "Utilities"
        },
        {
          "Symbol": "DUK",
          "Name": "Duke Energy",
          "Sector": "Utilities"
        },
        {
          "Symbol": "DRE",
          "Name": "Duke Realty Corp",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "DXC",
          "Name": "DXC Technology",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ETFC",
          "Name": "E*Trade",
          "Sector": "Financials"
        },
        {
          "Symbol": "EMN",
          "Name": "Eastman Chemical",
          "Sector": "Materials"
        },
        {
          "Symbol": "ETN",
          "Name": "Eaton Corporation",
          "Sector": "Industrials"
        },
        {
          "Symbol": "EBAY",
          "Name": "eBay Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ECL",
          "Name": "Ecolab Inc.",
          "Sector": "Materials"
        },
        {
          "Symbol": "EIX",
          "Name": "Edison Int'l",
          "Sector": "Utilities"
        },
        {
          "Symbol": "EW",
          "Name": "Edwards Lifesciences",
          "Sector": "Health Care"
        },
        {
          "Symbol": "EA",
          "Name": "Electronic Arts",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "EMR",
          "Name": "Emerson Electric Company",
          "Sector": "Industrials"
        },
        {
          "Symbol": "ETR",
          "Name": "Entergy Corp.",
          "Sector": "Utilities"
        },
        {
          "Symbol": "EVHC",
          "Name": "Envision Healthcare",
          "Sector": "Health Care"
        },
        {
          "Symbol": "EOG",
          "Name": "EOG Resources",
          "Sector": "Energy"
        },
        {
          "Symbol": "EQT",
          "Name": "EQT Corporation",
          "Sector": "Energy"
        },
        {
          "Symbol": "EFX",
          "Name": "Equifax Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "EQIX",
          "Name": "Equinix",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "EQR",
          "Name": "Equity Residential",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "ESS",
          "Name": "Essex Property Trust, Inc.",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "EL",
          "Name": "Estee Lauder Cos.",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "RE",
          "Name": "Everest Re Group Ltd.",
          "Sector": "Financials"
        },
        {
          "Symbol": "ES",
          "Name": "Eversource Energy",
          "Sector": "Utilities"
        },
        {
          "Symbol": "EXC",
          "Name": "Exelon Corp.",
          "Sector": "Utilities"
        },
        {
          "Symbol": "EXPE",
          "Name": "Expedia Inc.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "EXPD",
          "Name": "Expeditors International",
          "Sector": "Industrials"
        },
        {
          "Symbol": "ESRX",
          "Name": "Express Scripts",
          "Sector": "Health Care"
        },
        {
          "Symbol": "EXR",
          "Name": "Extra Space Storage",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "XOM",
          "Name": "Exxon Mobil Corp.",
          "Sector": "Energy"
        },
        {
          "Symbol": "FFIV",
          "Name": "F5 Networks",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "FB",
          "Name": "Facebook, Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "FAST",
          "Name": "Fastenal Co",
          "Sector": "Industrials"
        },
        {
          "Symbol": "FRT",
          "Name": "Federal Realty Investment Trust",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "FDX",
          "Name": "FedEx Corporation",
          "Sector": "Industrials"
        },
        {
          "Symbol": "FIS",
          "Name": "Fidelity National Information Services",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "FITB",
          "Name": "Fifth Third Bancorp",
          "Sector": "Financials"
        },
        {
          "Symbol": "FE",
          "Name": "FirstEnergy Corp",
          "Sector": "Utilities"
        },
        {
          "Symbol": "FISV",
          "Name": "Fiserv Inc",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "FLIR",
          "Name": "FLIR Systems",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "FLS",
          "Name": "Flowserve Corporation",
          "Sector": "Industrials"
        },
        {
          "Symbol": "FLR",
          "Name": "Fluor Corp.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "FMC",
          "Name": "FMC Corporation",
          "Sector": "Materials"
        },
        {
          "Symbol": "FL",
          "Name": "Foot Locker Inc",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "F",
          "Name": "Ford Motor",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "FTV",
          "Name": "Fortive Corp",
          "Sector": "Industrials"
        },
        {
          "Symbol": "FBHS",
          "Name": "Fortune Brands Home &amp; Security",
          "Sector": "Industrials"
        },
        {
          "Symbol": "BEN",
          "Name": "Franklin Resources",
          "Sector": "Financials"
        },
        {
          "Symbol": "FCX",
          "Name": "Freeport-McMoRan Inc.",
          "Sector": "Materials"
        },
        {
          "Symbol": "GPS",
          "Name": "Gap Inc.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "GRMN",
          "Name": "Garmin Ltd.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "IT",
          "Name": "Gartner Inc",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "GD",
          "Name": "General Dynamics",
          "Sector": "Industrials"
        },
        {
          "Symbol": "GE",
          "Name": "General Electric",
          "Sector": "Industrials"
        },
        {
          "Symbol": "GGP",
          "Name": "General Growth Properties Inc.",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "GIS",
          "Name": "General Mills",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "GM",
          "Name": "General Motors",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "GPC",
          "Name": "Genuine Parts",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "GILD",
          "Name": "Gilead Sciences",
          "Sector": "Health Care"
        },
        {
          "Symbol": "GPN",
          "Name": "Global Payments Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "GS",
          "Name": "Goldman Sachs Group",
          "Sector": "Financials"
        },
        {
          "Symbol": "GT",
          "Name": "Goodyear Tire &amp; Rubber",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "GWW",
          "Name": "Grainger (W.W.) Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "HAL",
          "Name": "Halliburton Co.",
          "Sector": "Energy"
        },
        {
          "Symbol": "HBI",
          "Name": "Hanesbrands Inc",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "HOG",
          "Name": "Harley-Davidson",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "HRS",
          "Name": "Harris Corporation",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "HIG",
          "Name": "Hartford Financial Svc.Gp.",
          "Sector": "Financials"
        },
        {
          "Symbol": "HAS",
          "Name": "Hasbro Inc.",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "HCA",
          "Name": "HCA Holdings",
          "Sector": "Health Care"
        },
        {
          "Symbol": "HCP",
          "Name": "HCP Inc.",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "HP",
          "Name": "Helmerich &amp; Payne",
          "Sector": "Energy"
        },
        {
          "Symbol": "HSIC",
          "Name": "Henry Schein",
          "Sector": "Health Care"
        },
        {
          "Symbol": "HES",
          "Name": "Hess Corporation",
          "Sector": "Energy"
        },
        {
          "Symbol": "HPE",
          "Name": "Hewlett Packard Enterprise",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "HLT",
          "Name": "Hilton Worldwide Holdings Inc",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "HOLX",
          "Name": "Hologic",
          "Sector": "Health Care"
        },
        {
          "Symbol": "HD",
          "Name": "Home Depot",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "HON",
          "Name": "Honeywell Int'l Inc.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "HRL",
          "Name": "Hormel Foods Corp.",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "HST",
          "Name": "Host Hotels &amp; Resorts",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "HPQ",
          "Name": "HP Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "HUM",
          "Name": "Humana Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "HBAN",
          "Name": "Huntington Bancshares",
          "Sector": "Financials"
        },
        {
          "Symbol": "HII",
          "Name": "Huntington Ingalls Industries",
          "Sector": "Industrials"
        },
        {
          "Symbol": "IDXX",
          "Name": "IDEXX Laboratories",
          "Sector": "Health Care"
        },
        {
          "Symbol": "INFO",
          "Name": "IHS Markit Ltd.",
          "Sector": "Industrials"
        },
        {
          "Symbol": "ITW",
          "Name": "Illinois Tool Works",
          "Sector": "Industrials"
        },
        {
          "Symbol": "ILMN",
          "Name": "Illumina Inc",
          "Sector": "Health Care"
        },
        {
          "Symbol": "INCY",
          "Name": "Incyte",
          "Sector": "Health Care"
        },
        {
          "Symbol": "IR",
          "Name": "Ingersoll-Rand PLC",
          "Sector": "Industrials"
        },
        {
          "Symbol": "INTC",
          "Name": "Intel Corp.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ICE",
          "Name": "Intercontinental Exchange",
          "Sector": "Financials"
        },
        {
          "Symbol": "IBM",
          "Name": "International Business Machines",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "IP",
          "Name": "International Paper",
          "Sector": "Materials"
        },
        {
          "Symbol": "IPG",
          "Name": "Interpublic Group",
          "Sector": "Consumer Discretionary"
        },
        {
          "Symbol": "IFF",
          "Name": "Intl Flavors &amp; Fragrances",
          "Sector": "Materials"
        },
        {
          "Symbol": "INTU",
          "Name": "Intuit Inc.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "ISRG",
          "Name": "Intuitive Surgical Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "IVZ",
          "Name": "Invesco Ltd.",
          "Sector": "Financials"
        },
        {
          "Symbol": "IPGP",
          "Name": "IPG Photonics Corp.",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "IQV",
          "Name": "IQVIA Holdings Inc.",
          "Sector": "Health Care"
        },
        {
          "Symbol": "IRM",
          "Name": "Iron Mountain Incorporated",
          "Sector": "Real Estate"
        },
        {
          "Symbol": "JBHT",
          "Name": "J. B. Hunt Transport Services",
          "Sector": "Industrials"
        },
        {
          "Symbol": "JEC",
          "Name": "Jacobs Engineering Group",
          "Sector": "Industrials"
        },
        {
          "Symbol": "SJM",
          "Name": "JM Smucker",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "JNJ",
          "Name": "Johnson &amp; Johnson",
          "Sector": "Health Care"
        },
        {
          "Symbol": "JCI",
          "Name": "Johnson Controls International",
          "Sector": "Industrials"
        },
        {
          "Symbol": "JPM",
          "Name": "JPMorgan Chase &amp; Co.",
          "Sector": "Financials"
        },
        {
          "Symbol": "JNPR",
          "Name": "Juniper Networks",
          "Sector": "Information Technology"
        },
        {
          "Symbol": "KSU",
          "Name": "Kansas City Southern",
          "Sector": "Industrials"
        },
        {
          "Symbol": "K",
          "Name": "Kellogg Co.",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "KEY",
          "Name": "KeyCorp",
          "Sector": "Financials"
        },
        {
          "Symbol": "KMB",
          "Name": "Kimberly-Clark",
          "Sector": "Consumer Staples"
        },
        {
          "Symbol": "KIM",
          "Name": "Kimco Realty",
          "Sector": "Real E…"
        }
      ]
  }

export default sp500;