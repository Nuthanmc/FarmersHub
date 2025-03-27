const mongoose = require('mongoose');
const technology = require('../models/foodsecurity');

mongoose.connect('mongodb://localhost:27017/shekru', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

class Technology {
    constructor(details) {
      this.title = details.title;
      this.description = details.description;
      this.salientFeatures = details.salientFeatures;
      this.benefits = details.benefits;
      this.cost = details.cost;
      this.developer = details.developer;
      this.contactDetails = details.contactDetails;
    }
  }
  
  const newRecord = [
    new Technology({
      title: 'Whey Protein Production',
      description:
        'Manufacturing high-quality whey protein from milk by-products such as whey liquid obtained during cheese production. The process produces nutritional supplements beneficial for muscle building, weight management, and overall health.',
      salientFeatures: [
        'Utilizes whey, a by-product of cheese production, reducing dairy industry waste.',
        'Rich in essential amino acids and highly bioavailable.',
        'Suitable for various dietary needs, including fitness enthusiasts and medical nutrition.',
      ],
      benefits: [
        'Provides a premium source of protein for health-conscious individuals.',
        'Adds value to dairy by-products, creating additional income streams for dairy producers.',
        'Encourages local manufacturing and entrepreneurship in health and wellness sectors.',
        'Revenue potential of ₹50,000–₹2,00,000 per month depending on production scale and market demand.',
      ],
      investment: '₹5-₹10 lakh initial investment for production setup and machinery.',
      revenue: [
        'Monthly production: 500–1,500 kg of whey protein powder.',
        'Selling price: ₹500–₹1,500 per kg.',
        'Estimated monthly revenue: ₹50,000–₹2,00,000.',
      ],
      profitMargin: '40–50%.',
      training: 'Training can be arranged through food processing institutions or dairy product innovation centers.',
      developer: 'Not specified.',
      contactDetails: {
        director: 'Not specified',
        email: 'Not specified',
        address: 'Not specified',
        website: 'Not specified',
      },
    }),
    new Technology({
      title: 'Pineapple Fruit Residue Silage Technology',
      description:
        'A technology that converts non-edible pineapple fruit residue into high-quality silage, improving its keeping quality and nutritional value for animal feed. This technology helps in utilizing the annual 1.3 million tons of wasted pineapple residue in India.',
      salientFeatures: [
        'Pineapple fruit residue (PFR) chaffed into 1-2 inch pieces and compacted with 4:1 ratio of leafy crown to fruit peels',
        'Stored under airtight conditions with 65% moisture for 20 days to prepare good quality silage',
        'Nutritive value of PFR silage better than maize green fodder',
        'Feeding PFR silage supports desired growth in sheep and improves milk yield and fat content in dairy cows',
      ],
      benefits: [
        'Reduces waste of 1.3 million tons of pineapple residue annually in India',
        'Offers a cost-effective alternative to maize green fodder with a cost-saving of Rs 1 per kg',
        'Improves milk yield by about 20% and fat content by 0.6 units in dairy cows',
      ],
      cost: 'Rs 1 per kg',
      developer: {
        name: 'NKS Gowda, DT Pal, S Anandan, and CS Prasad',
        organization: 'ICAR-National Institute of Animal Nutrition and Physiology, Bangalore',
      },
      contactDetails: {
        director: 'directornianp@gmail.com',
        email: 'directornianp@gmail.com',
        address: 'ICAR-National Institute of Animal Nutrition and Physiology, Bangalore, Karnataka',
        website: 'https://www.nianp.res.in',
      },
    }),
    new Technology({
      title: 'Preparation of Handmade Paper from Jute Waste',
      description:
        'Development of a technology of making handmade paper from jute fibre especially jute residue will open up a new area where substantial quantity of thrown away jute waste can be used for making handmade paper of good commercial value.',
      salientFeatures: [
        'The handmade paper/paper board is made from low grade jute fibre',
        'Can be suitably blended with other lignocellulosic fibres',
        'Inexpensive pulping process with minimum use of chemicals',
        'Diversified uses such as files, folders, greeting cards, etc.',
      ],
      benefits: [
        'Handmade paper products conserve resources and generate less pollution',
        'Producing handmade paper uses much less total energy',
        'Reduces total number of trees cut down',
        'Cost involved: Cost of Machine and Equipment: Rs. 70 lakhs (Approx.)',
      ],
      cost: 'Rs. 70 lakhs (Approx.)',
      developer: {
        name: 'S N Chattopadhyay',
        organization: 'ICAR-NINFET, Kolkata',
      },
      contactDetails: {
        director: 'Director',
        email: 'director.ninfet@icar.gov.in',
        address: 'ICAR-National Institute of Natural Fibre Engineering & Technology, Kolkata-700 040 West Bengal',
        website: 'www.nirjaft.res.in',
      },
    }),
    new Technology({
      title: 'Handmade Paper Production',
      description:
        'Manufacturing handmade paper using sustainable materials like sugarcane bagasse, rice husks, and wheat straw. The process creates eco-friendly paper products suitable for various applications while reducing agricultural waste.',
      salientFeatures: [
        'Uses agricultural by-products like sugarcane bagasse, rice husks, and wheat straw, promoting waste recycling.',
        'Eco-friendly alternative to conventional paper production.',
        'Low energy and water requirements compared to industrial paper production.',
      ],
      benefits: [
        'Provides an environmentally sustainable paper option.',
        'Creates additional income streams for farmers by utilizing agricultural waste.',
        'Encourages small-scale entrepreneurship in rural areas.',
        'Revenue potential of ₹10,000–₹50,000 per month by producing 2,000–5,000 sheets.',
      ],
      investment: '₹3–₹5 lakh initial investment.',
      revenue: [
        'Monthly production: 2,000–5,000 sheets.',
        'Selling price: ₹5–₹10 per sheet.',
        'Estimated monthly revenue: ₹10,000–₹50,000.',
      ],
      profitMargin: '50–60%.',
      training: 'Training can be arranged through institutions or NGOs specializing in handmade paper production techniques.',
      developer: 'Not specified.',
      contactDetails: {
        director: 'Not specified',
        email: 'Not specified',
        address: 'Not specified',
        website: 'Not specified',
      },
    }),
    new Technology({
      title: 'Compostable Toothbrush Handles',
      description:
        'Production of eco-friendly toothbrush handles made from sustainable materials such as bamboo waste and coconut coir. These handles are fully compostable and cater to the growing demand for environmentally friendly products.',
      salientFeatures: [
        'Utilizes bamboo waste and coconut coir, promoting sustainable use of natural materials.',
        'The handles are fully compostable, reducing environmental impact.',
        'Caters to the eco-conscious market segment looking for plastic-free alternatives.',
      ],
      benefits: [
        'High demand in the eco-friendly personal care products market.',
        'Revenue potential of ₹50,000–₹2 lakh per month by producing 1,000–2,000 units.',
        'Promotes waste valorization and reduces dependency on non-biodegradable materials.',
      ],
      investment: '₹5–₹10 lakh initial investment.',
      revenue: [
        'Monthly production: 1,000–2,000 toothbrush handles.',
        'Selling price: ₹50–₹100 per handle.',
        'Estimated monthly revenue: ₹50,000–₹2 lakh.',
      ],
      training: 'Training can be arranged through institutions or industry experts specializing in bamboo and coir processing.',
      developer: 'Not specified.',
      contactDetails: {
        director: 'Not specified',
        email: 'Not specified',
        address: 'Not specified',
        website: 'Not specified',
      },
    }),
    new Technology({
      title: 'Natural Dyes Production',
      description:
        'Production of natural dyes using eco-friendly raw materials such as pomegranate peels, onion skins, and beetroot pulp. This process is suitable for small-scale entrepreneurs with a focus on sustainable and high-demand products.',
      salientFeatures: [
        'Utilizes natural raw materials such as pomegranate peels, onion skins, and beetroot pulp for dye production.',
        'Eco-friendly process with no harmful chemicals involved.',
        'The dyes produced are in high demand in the textile and handicraft industries.',
      ],
      benefits: [
        'High profit margin of 50–70% after material and operational costs.',
        'Revenue potential of ₹1–₹3 lakh per month by producing 50–100 kg of natural dye.',
        'Promotes sustainable practices by utilizing organic waste materials.',
      ],
      investment: '₹2–₹5 lakh initial investment.',
      revenue: [
        'Monthly production: 50–100 kg of natural dye.',
        'Selling price: ₹2,000–₹5,000 per kg.',
        'Estimated monthly revenue: ₹1–₹3 lakh.',
      ],
      training: 'Training can be sought from relevant industry experts or agricultural institutions specializing in natural dye production.',
      developer: 'Not specified.',
      contactDetails: {
        director: 'Not specified',
        email: 'Not specified',
        address: 'Not specified',
        website: 'Not specified',
      },
    }),
    new Technology({
      title: 'Water Purification from Agricultural Waste',
      description:
        'A technology that uses agricultural waste materials to filter and purify contaminated water, providing a sustainable water purification solution.',
      salientFeatures: [
        'Uses natural agricultural waste like rice husk and corn stalks',
        'Removes contaminants such as heavy metals and pathogens from water',
        'Cost-effective and easy to implement in rural areas',
      ],
      benefits: [
        'Provides clean drinking water in areas with limited access to water treatment',
        'Uses waste products, reducing pollution and disposal problems',
        'Reduces the cost of water purification in rural communities',
      ],
      cost: '$5,000',
      developer: {
        name: 'Sunil Patel',
        organization: 'AquaTech Innovations',
      },
      contactDetails: {
        director: 'Pooja Verma',
        email: 'contact@aquatechinnovations.com',
        address: '67 Water Ave, AquaCity, AQ 98765',
        website: 'https://www.aquatechinnovations.com',
      },
    }),
    new Technology({
      title: 'Lac Dye from Effluent of Stick Lac Washing',
      description:
        'Lac dye, a by-product of the lac industry, is lost in the effluent during the washing of sticklac in primary processing...',
      salientFeatures: [
        'Lac dye is a mixture of at least five closely related compounds, all being anthraquinone derivatives named laccaic acid A, B, C, D & E.',
        'A process has been developed for recovery of lac dye from effluent wash water of primary processing...',
      ],
      benefits: [
        'Recovery from effluent of lac washing and hygienic disposal of effluent.',
        'Lac dye is natural and non-toxic, suitable for use as a food coloring material.',
      ],
      cost: 'Rs. 3,000-4,000/kg',
      developer: {
        name: 'S. K. Pandey',
        organization: 'ICAR-IINRG Ranchi',
      },
      contactDetails: {
        director: 'Director',
        email: 'director.iinrg@icar.gov.in',
        address: 'ICAR-Indian Institute of Natural Resins and Gums, Namkum, Ranchi-834 010 Jharkhand',
        website: 'https://iinrg.icar.gov.in/',
      },
    }),
  
   
  new Technology({
      title: 'Biodegradable Packaging from Agricultural Waste',
      description:
        'A technology that converts agricultural waste into biodegradable packaging material, reducing plastic usage.',
      salientFeatures: [
        'Uses agricultural waste like rice husk and sugarcane bagasse',
        'Decomposes naturally without leaving harmful residues',
        'Lightweight yet durable packaging material',
      ],
      benefits: [
        'Reduces plastic pollution',
        'Supports sustainable agriculture by utilizing waste',
        'Eco-friendly and cost-effective alternative to plastic packaging',
      ],
      cost: '$8,000',
      developer: {
        name: 'Vikas Verma',
        organization: 'EcoSolutions',
      },
      contactDetails: {
        director: 'Manisha Patel',
        email: 'contact@ecosolutions.com',
        address: '123 Eco Park, GreenCity, EC 98765',
        website: 'https://www.ecosolutions.com',
      },
    }),
      
      new Technology({
        title: 'Biodegradable Pesticide from Plant Extracts',
        description:
          'A natural pesticide derived from plant extracts that is biodegradable and non-toxic to humans and animals.',
        salientFeatures: [
          'Made from organic plant-based ingredients',
          'Non-toxic and biodegradable, safe for the environment',
          'Effective against a wide range of agricultural pests',
        ],
        benefits: [
          'Reduces chemical pesticide usage, improving food safety',
          'Supports organic farming practices',
          'Minimizes environmental pollution and soil contamination',
        ],
        cost: '$1,500 per liter',
        developer: {
          name: 'Anupama Singh',
          organization: 'EcoAgri Solutions',
        },
        contactDetails: {
          director: 'Ravi Patel',
          email: 'contact@ecoagrisolutions.com',
          address: '45 GreenTech Road, FarmCity, AG 34567',
          website: 'https://www.ecoagrisolutions.com',
        },
      }),
      new Technology({
        title: 'Microbial Fuel Cells for Sustainable Energy',
        description:
          'Technology that uses microbial fuel cells to generate electricity from organic waste, providing a renewable energy source for agricultural operations.',
        salientFeatures: [
          'Generates electricity from organic waste like crop residues',
          'Uses microbes to break down organic material and produce energy',
          'Eco-friendly, reduces waste while generating power',
        ],
        benefits: [
          'Provides a sustainable energy source for farming operations',
          'Reduces waste and environmental pollution',
          'Ideal for off-grid farming operations in rural areas',
        ],
        cost: '$15,000',
        developer: {
          name: 'Madhur Gupta',
          organization: 'GreenEnergy Innovations',
        },
        contactDetails: {
          director: 'Kunal Bhatia',
          email: 'info@greenenergyinnovations.com',
          address: '89 GreenWay, PowerFarm, GE 12345',
          website: 'https://www.greenenergyinnovations.com',
        },
      }), 
    
      new Technology({
        title: 'Lac Dye from Effluent of Stick Lac Washing',
        description:
          'Lac dye, a by-product of the lac industry, is lost in the effluent during the washing of sticklac in primary processing...',
        salientFeatures: [
          'Lac dye is a mixture of at least five closely related compounds, all being anthraquinone derivatives named laccaic acid A, B, C, D & E.',
          'A process has been developed for recovery of lac dye from effluent wash water of primary processing...',
        ],
        benefits: [
          'Recovery from effluent of lac washing and hygienic disposal of effluent.',
          'Lac dye is natural and non-toxic, suitable for use as a food coloring material.',
        ],
        cost: 'Rs. 3,000-4,000/kg',
        developer: {
          name: 'S. K. Pandey',
          organization: 'ICAR-IINRG Ranchi',
        },
        contactDetails: {
          director: 'Director',
          email: 'director.iinrg@icar.gov.in',
          address: 'ICAR-Indian Institute of Natural Resins and Gums, Namkum, Ranchi-834 010 Jharkhand',
          website: 'https://iinrg.icar.gov.in/',
        },
      }),
    
      new Technology({
        title: 'Lac Mud as Organic Manure',
        description:
          'Lac mud, a waste product of lac processing industries, can be used as organic manure, enhancing soil fertility...',
        salientFeatures: [
          'Application of decomposed enriched lac mud in vegetables recorded 22.0%, 22.5%, and 18.3% higher yields...',
          'Ensures saving of 48% of N and P fertilizers...',
        ],
        benefits: [
          'Ensures quality flower and vegetable production.',
          'Improves soil fertility and reduces dependency on inorganic fertilizers.',
        ],
        cost: 'Not explicitly stated (useful for sustainable agriculture).',
        developer: {
          name: 'A.K. Singh & S. Ghosal',
          organization: 'ICAR-IINRG, Ranchi',
        },
        contactDetails: {
          director: 'Director',
          email: 'director.iinrg@icar.gov.in',
          address: 'ICAR-Indian Institute of Natural Resins and Gums, Namkum, Ranchi-834 010 Jharkhand',
          website: 'https://iinrg.icar.gov.in/',
        },
      }),
        new Technology({
          title: 'Biodegradable Pesticide from Plant Extracts',
          description:
            'A natural pesticide derived from plant extracts that is biodegradable and non-toxic to humans and animals.',
          salientFeatures: [
            'Made from organic plant-based ingredients',
            'Non-toxic and biodegradable, safe for the environment',
            'Effective against a wide range of agricultural pests',
          ],
          benefits: [
            'Reduces chemical pesticide usage, improving food safety',
            'Supports organic farming practices',
            'Minimizes environmental pollution and soil contamination',
          ],
          cost: '$1,500 per liter',
          developer: {
            name: 'Anupama Singh',
            organization: 'EcoAgri Solutions',
          },
          contactDetails: {
            director: 'Ravi Patel',
            email: 'contact@ecoagrisolutions.com',
            address: '45 GreenTech Road, FarmCity, AG 34567',
            website: 'https://www.ecoagrisolutions.com',
          },
        }),
        
        new Technology({
          title: 'Aquaponics Farming System',
          description:
            'A sustainable farming method combining aquaculture and hydroponics, using fish waste to fertilize plants while plants filter and purify the water for the fish.',
          salientFeatures: [
            'Recirculating water system that reduces water usage',
            'Provides both fish and plant products in a closed-loop ecosystem',
            'Highly efficient use of space, ideal for urban farming',
          ],
          benefits: [
            'Uses 90% less water than traditional farming methods',
            'Produces two valuable outputs: fish and vegetables',
            'Promotes sustainable, organic farming with minimal environmental impact',
          ],
          cost: '$8,000',
          developer: {
            name: 'Sandeep Mehta',
            organization: 'EcoFarm Technologies',
          },
          contactDetails: {
            director: 'Neha Reddy',
            email: 'contact@ecofarmtechnologies.com',
            address: '12 EcoPark Lane, UrbanFarm, EF 98765',
            website: 'https://www.ecofarmtechnologies.com',
          },
        }),
        
        new Technology({
          title: 'Smart Fertilizer Dispensing System',
          description:
            'An automated system that delivers the right amount of fertilizer to crops based on soil nutrient levels and crop requirements.',
          salientFeatures: [
            'Real-time monitoring of soil nutrient levels',
            'Automatically adjusts fertilizer delivery based on crop needs',
            'Can be integrated with existing irrigation systems',
          ],
          benefits: [
            'Reduces fertilizer wastage and environmental pollution',
            'Improves crop health by providing balanced nutrients',
            'Increases efficiency in farm management',
          ],
          cost: '$3,500',
          developer: {
            name: 'Vijay Sharma',
            organization: 'AgriTech Solutions',
          },
          contactDetails: {
            director: 'Geeta Kumari',
            email: 'support@agritechsolutions.com',
            address: '77 AgriTech St., FarmVille, AT 56789',
            website: 'https://www.agritechsolutions.com',
          },
        }),
        
        new Technology({
          title: 'Microbial Fuel Cells for Sustainable Energy',
          description:
            'Technology that uses microbial fuel cells to generate electricity from organic waste, providing a renewable energy source for agricultural operations.',
          salientFeatures: [
            'Generates electricity from organic waste like crop residues',
            'Uses microbes to break down organic material and produce energy',
            'Eco-friendly, reduces waste while generating power',
          ],
          benefits: [
            'Provides a sustainable energy source for farming operations',
            'Reduces waste and environmental pollution',
            'Ideal for off-grid farming operations in rural areas',
          ],
          cost: '$15,000',
          developer: {
            name: 'Madhur Gupta',
            organization: 'GreenEnergy Innovations',
          },
          contactDetails: {
            director: 'Kunal Bhatia',
            email: 'info@greenenergyinnovations.com',
            address: '89 GreenWay, PowerFarm, GE 12345',
            website: 'https://www.greenenergyinnovations.com',
          },
        }),
  new Technology({
    title: 'Tamarind Seed Husk Technology (Tamarin Plus)',
    description:
      'An innovative solution using tamarind seed husk to modulate rumen fermentation and reduce methane emissions in livestock. The technology has recently been patented (Patent no. 338616).',
    salientFeatures: [
      'Use of tamarind seed husk at 5% level reduces enteric methane emission by 17-20%',
      'Tamarin Plus can be fed to growing, lactating, and adult animals ad libitum',
      'Tamarind seed husk is an inexpensive ingredient costing 3-4 rupees per kilogram',
    ],
    benefits: [
      'Reduces methane emission from livestock by 17-20%',
      'Saves 26.28x10^6 giga calorie energy annually in India',
      'Can be used as an ingredient in total mixed ration along with straw and concentrate items',
    ],
    cost: '3-4 rupees per kilogram',
    developer: {
      name: 'Raghavendra Bhatta, P. K. Malik, and A. P. Kolte',
      organization: 'ICAR-National Institute of Animal Nutrition and Physiology, Bengaluru',
    },
    contactDetails: {
      director: 'Directornianp@gmail.com',
      email: 'directornianp@gmail.com',
      address: 'ICAR-National Institute of Animal Nutrition and Physiology, Bengaluru',
      website: 'https://www.nianp.res.in',
    },
  }),
 
  new Technology({
    title: 'Kinnow Peel Alcoholic Beverage with Nutraceutical Properties',
    description:
      'A low-cost indigenous technology for producing an alcoholic beverage from kinnow peels using crude enzyme consortium, natural extracts, fermentation with naturally occurring yeast, and simple filtration for clarification.',
    salientFeatures: [
      'Kinnow peels undergo size reduction followed by enzymatic hydrolysis',
      'Clarified regularly for two months to impart characteristic flavor',
      'Contains 5-6% (v/v) alcohol with total phenolic content, scavenging ability, and acidity ranging from 15-18 mg/GAE, 65-80%, and 0.40-0.42%, respectively',
      'No methanol found in the beverage, indicating safety',
    ],
    benefits: [
      'Alcoholic beverage with high nutraceutical properties',
      'Effective waste utilization of kinnow peels',
      'Benefit Cost Ratio of 1.5:1 indicates cost-effectiveness',
    ],
    cost: 'Not specified',
    developer: {
      name: 'H.S. Oberoi',
      organization: 'ICAR-Central Institute for Post-Harvest Engineering & Technology, Ludhiana',
    },
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute for Post-Harvest Engineering & Technology, Ludhiana-141004, Punjab',
      website: 'https://www.ciphet.in',
    },
  }),
  new Technology({
    title: 'Mushroom Cultivation Using Oil Palm Waste',
    description:
      'A technology that utilizes oil palm bunch refuse and mesocarp waste, sterilized after oil extraction, as ideal substrates for growing edible mushrooms like Paddy straw mushroom, Oyster mushrooms, Summer white milky mushroom, and Summer white button mushroom either directly or after developing compost.',
    salientFeatures: [
      'Small-scale mushroom cultivation can be undertaken near oil palm factory zones',
      'Provides regular income to rural populations, farmers, and women involved in mushroom production',
      'Eco-friendly disposal of oil palm factory wastes by utilizing them for edible mushroom production',
      'Bioconversion of waste material into high-quality protein-rich edible food',
    ],
    benefits: [
      'Improves economic status of rural communities by offering regular income',
      'Reduces waste from oil palm factories while producing nutrient-rich food',
      'Technology is cost-effective and environmentally friendly',
    ],
    cost: 'Not specified',
    developer: {
      name: 'M. Kochu Babu',
      organization: 'ICAR-Indian Institute of Oil Palm Research, Pedavegi',
    },
    contactDetails: {
      director: 'director.iiopr@icar.gov.in',
      email: 'director.iiopr@icar.gov.in',
      address: 'ICAR-Indian Institute of Oil Palm Research, Pedavegi, Andhra Pradesh',
      website: 'http://dopr.gov.in',
    },
  }),
  new Technology({
    title: 'Utilizing Palm Oil Mill Effluent (POME) in Animal Feed Formulation',
    description:
      'A technology that formulates feeds using palm oil sludge as the primary ingredient, incorporating dehydrated palm oil mill effluent (POME) to create animal feeds for various livestock, thereby providing an environmentally friendly solution for POME disposal.',
    salientFeatures: [
      'Dehydrated POME can be incorporated into buffalo calves and buffalo diets up to 40%, lamb diets up to 60%, goat diets up to 50%, and piglet diets up to 20%',
      'Dried palm oil sludge (POS) can be used in fish feeds up to 60% for Rohu and Koi-Carp, and 40% for Catla catla',
      'Palm kernel cake (PKC) can be included in the diets of Rohu up to 10%',
      'Machinery is required for feed formulation manufacturing',
    ],
    benefits: [
      'Marked economic advantage by utilizing POS/POME as an ingredient in animal feed formulations',
      'Reduction in the unit cost of production for milk, meat, etc., benefiting both producers and consumers',
      'Environmentally friendly disposal of factory wastes',
    ],
    cost: 'Not specified',
    developer: {
      name: 'M. Kochu Babu, M. Vijayalakshmi, ANU, P. Kumaraiah, P. V. Rangacharyulu, ICAR-CIFA, E. Raghava Rao, NTR College of Veterinary Science, Shinoj Subramannian, ICAR-IIOPR, Pedavegi',
      organization: 'ICAR-Indian Institute of Oil Palm Research, Pedavegi',
    },
    contactDetails: {
      director: 'director.iiopr@icar.gov.in',
      email: 'director.iiopr@icar.gov.in',
      address: 'ICAR-Indian Institute of Oil Palm Research, Pedavegi, Andhra Pradesh',
      website: 'http://dopr.gov.in',
    },
  }),
  new Technology({
    title: 'Utilizing Potato Waste in Animal Feed Production',
    description:
      'A technology that converts potato processing waste, such as pulp, peels, culls, and fragments, into a complete animal feed. By replacing 25-30% of the grain component with processed potato waste, it addresses disposal issues and adds value to waste products.',
    salientFeatures: [
      'Raw ingredients: Potato component, maize, mustard oilcake, de-oiled rice polish, rice polish mineral mixture, salt, urea',
      'Process: Cleaning, weighing, grinding (Hammer mill), mixing feed ingredients (Blender, 30 Min.), pellet making/extrusion (Horizontal/vertical pelletizer or single screw extruder), drying (Trey drier/sun drying), packaging, storage',
      'Converts waste from potato processing into value-added animal feed',
      'Commercial feed plant establishment with total capital investment of Rs 27 lakhs; profit of 4.0-4.5 lakhs/annum',
    ],
    benefits: [
      'Economical preparation of animal feed with potato waste replacing 25-30% of grain component',
      'Reduces disposal problem of potato processing waste',
      'Enables easy adoption by both industry and small/large scale farmers',
    ],
    cost: 'Not specified',
    developer: {
      name: 'Sangeeta Chopra',
      organization: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana',
    },
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana, Punjab',
      website: 'https://www.ciphet.in',
      director2: 'director.cpri@icar.gov.in',
      website2: 'http://cpri.icar.gov.in',
    },
  }),
  new Technology({
    title: 'Cashew Apple Powder Production Technology',
    description:
      'A technology that converts perishable cashew apples into stable cashew apple powder (CAP) through a simple drying and pulverizing process. This technique helps in generating additional revenue for farmers by reducing wastage and increasing shelf life.',
    salientFeatures: [
      'Short shelf life and astringency of cashew apples make additional revenue generation difficult for farmers',
      'Converting perishable fruit into stable cashew apple powder provides employment in rural areas and a stable income for farmers',
      'High ascorbic acid, dietary fiber, and proanthocyanin content suitable for nutritive mix, infant food, and pharmaceuticals',
      'Production involves picking, cleaning, slicing, chemical treatment for tannin reduction, and drying (Convection drying or Poly house solar tunnel dryer)',
    ],
    benefits: [
      'Cost of production is Rs 20 per kg',
      'Long shelf life of cashew apple powder allows for bulk processing and supply to food industries for making diverse products like RTS beverages, jams, jellies, cookies, etc.',
      'Technology utilizes solar energy, making it cost-effective and suitable for cashew growing regions',
      'BCR: 1.23:1 indicates profitability and economic viability of the technology for farmers',
    ],
    cost: 'Rs 20 per kg',
    developer: {
      name: 'D Balasubramanian',
      organization: 'ICAR-Directorate of Cashew Research',
    },
    contactDetails: {
      director: 'director.dcr@icar.gov.in',
      email: 'director.dcr@icar.gov.in',
      address: 'ICAR-Directorate of Cashew Research, Puttur, Karnataka',
      website: 'https://www.cashew.res.in',
    },
  }),
  new Technology({
    title: 'Arka Fermented Cocopeat Technology',
    description:
      'A method of coirpith (coconut husk by-product) processing using solid-state fermentation by Aspergillus heteromorphus followed by enrichment with Arka Microbial Consortium. This technology simplifies the process of producing cocopeat in an environment-friendly way with minimal water usage.',
    salientFeatures: [
      'Solid-state fermentation of coirpith using Aspergillus heteromorphus for thirty days',
      'Enrichment of the fermented substrate with Arka Microbial Consortium for enhanced microbial diversity',
      'Environmentally friendly, reduces water usage and prevents pollution',
      'Investment required: Rs.50,000 for a nursery entrepreneur for a production facility of 30 t/month; Rs.10 lakh for a cocopeat manufacturer for a Biosafety Level - 1 microbiological lab',
    ],
    benefits: [
      'Reduced cost of production compared to traditional methods',
      'Improved soil quality with beneficial microorganisms like N fixers, P solubilizers, and plant growth promoters',
      'Better seed germination, uniform seedlings, and early transplantation maturity',
      'Self-employment generating technology in coconut growing regions of South and East India',
    ],
    cost: 'Rs.50,000 for a nursery entrepreneur, Rs.10 lakh for a cocopeat manufacturer',
    developer: {
      name: 'G.Selvakumar, P.Panneerselvam, A.N. Ganeshamurthy, V.K.Rao',
      organization: 'ICAR-Indian Institute of Horticultural Research',
    },
    contactDetails: {
      director: 'director.iihr@icar.gov.in',
      email: 'director.iihr@icar.gov.in',
      address: 'ICAR-Indian Institute of Horticultural Research, Bengaluru, Karnataka',
      website: 'https://www.iihr.res.in',
    },
  }),
  new Technology({
    title: 'Mango Peel Nutraceuticals Technology',
    description:
      'A technology enabling the isolation of natural antioxidants, pectin, and dietary fiber from mango peels, a by-product of mango processing. The peels possess significantly higher levels of antioxidants, making them a valuable source for food supplements. The process is aimed at commercializing and upscaling.',
    salientFeatures: [
      'Isolation of natural antioxidants, pectin, and dietary fiber from mango peels',
      'Heat-stable antioxidants suitable for heating operations in food preparation',
      'Yield of pectin from peels: 9–11% used as a gelling agent in food products',
      'Use of a Sample mill, Solvent extractor, Solvent evaporator, and Industrial drier',
      'Industrial shed requirement of 30 x 40 meters with power and water facilities, capital requirement: Rs.45 lakhs',
      'Yield of dietary fiber from mango peels: 40%',
      'Antioxidant yield: 16-20%; fortification of mango concentrate (65% solids) with peel antioxidants (0.08%) doubles the antioxidant activity',
    ],
    benefits: [
      'Increased dietary fiber content from mango peels for gastro-intestinal tract health',
      'Higher antioxidant content compared to the pulp, suitable for food fortification',
      'Pectin as an industrial food additive with gelling properties',
      'Economic advantage with a Benefit Cost Ratio of 1.11',
    ],
    cost: 'Rs.45 lakh (excluding industrial shed)',
    developer: {
      name: 'V. K. Rao, C. K. Narayana, I. N. Doreyappa Gowda, D. V. S. Rao',
      organization: 'ICAR-Indian Institute of Horticultural Research',
    },
    contactDetails: {
      director: 'director.iihr@icar.gov.in',
      email: 'director.iihr@icar.gov.in',
      address: 'ICAR-Indian Institute of Horticultural Research, Bengaluru, Karnataka',
      website: 'https://www.iihr.res.in',
    },
  }),
  new Technology({
    title: 'Cabbage Leaf Utilization Technology',
    description:
      'A process for utilizing cabbage leaf waste in food products like bread, biscuits, and rusk, enhancing their nutritional value. This technology addresses the problem of cabbage leaf wastage in India and converts it into beneficial food ingredients.',
    salientFeatures: [
      'Cabbage leaves peeled-off during preparation for market are washed, blanched, dried, and powdered',
      'Powder mixed with refined wheat flour (up to 7% w/w) for baking',
      'Two-stage process: sanitization, stabilization, pre-processing, and incorporation of optimized intermediary product',
      'Baked products (Bread, Rusk, Biscuits/Cookies) have enhanced nutrition: 3-5 times high in total carotenoids, 2-10 folds high in crude fiber, 80-100% high in total antioxidants',
      'The process retains cabbage leaf nutritional value while avoiding chemical residues',
    ],
    benefits: [
      'Replacement of refined wheat flour with 5-7% cabbage leaf powder enhances protein by 22-44%, crude fiber by 118-188%, and total carotenoids by 54-138%',
      'Total antioxidant activity increases from 98.65 to 151.22 mg/100g',
    ],
    developer: {
      name: 'C.K.Narayana & D.V.Sudhakar Rao',
      organization: 'ICAR-Indian Institute of Horticultural Research',
    },
    contactDetails: {
      director: 'director.iihr@icar.gov.in',
      email: 'director.iihr@icar.gov.in',
      address: 'ICAR-Indian Institute of Horticultural Research, Bengaluru, Karnataka',
      website: 'https://www.iihr.res.in',
    },
  }),
  new Technology({
    title: 'Central Core Stem Utilization in Culinary Preparations',
    description:
      'Technology for utilizing the central core stem of banana pseudostem as an ingredient in culinary preparations like candy, which is rich in fiber and potassium. The technology also provides a sweet treat and offers a sustainable use of agricultural waste.',
    salientFeatures: [
      'Central stem converted into candy by slicing and steeping in sugar syrup',
      'Banana central core stem based ginger candy: mixed syrup and ginger in 8:2 ratio, soaked in syrup-ginger extract mixture, dried in hot air oven overnight',
      'Fortification with other juices (carrot, beetroot, curcumin, etc.) possible',
      'Can be stored safely for up to three months',
    ],
    benefits: [
      'Rich in dietary fiber and potassium, believed to dissolve kidney stones',
      'Generates rural employment, particularly for women',
    ],
    developer: {
      name: 'C.K. Narayana, K.N. Shiva, P. Suresh Kumar, Amelia Keran D, K. Kamaraju & S. Uma',
      organization: 'ICAR-National Research Centre for Banana',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Tiruchirapalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Central Core Stem Pickle from Banana Pseudostem Waste',
    description:
      'Technology for utilizing the central core of banana pseudostem as a high-value product by making central core stem pickle. This process uses waste material from banana crop production to create a stable, tasty product with nutritional benefits.',
    salientFeatures: [
      'Extraction of central core from pseudostem, slicing, cutting, removal of fiber, blanching, and addition of spices and oil',
      'Equipment: Steam Boiler, Mixer cum Grinder, frying pans, Pickle filling and packing machine/ pouch sealing machine, blancher',
      'Capital investment of Rs 44,71,500 required',
      'Product stable for one-year at room temperature',
      'Suitable for Self-help groups for women (SHGs)',
    ],
    benefits: [
      'Provides additional revenue to farmers from waste material',
      'Useful for small and medium scale industries',
      'Creates rural employment and generates wealth from waste',
    ],
    developer: {
      name: 'C.K. Narayana, K.N. Shiva, P. Suresh Kumar, Amelia Keran D, K. Kamaraju, S. Uma',
      organization: 'ICAR-National Research Centre for Banana',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirappalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Central Core Stem Juice from Banana Pseudostem Waste',
    description:
      'Technology for extracting juice from the central core of banana pseudostem, which is used for culinary preparations and has health benefits like dissolving kidney stones. The process involves multiple steps including slicing, cutting, crushing, pasteurization, and sterilization.',
    salientFeatures: [
      'Extraction of central core from pseudostem, slicing and cutting into small pieces, removal of fiber, crushing, extraction of juice, pasteurization, packing, sterilization, and storage',
      'Requires total capital investment of Rs 1,39,02,350, manpower of 7 persons, space of 3000 Sq Ft. covered plinth area, working tables and equipment such as Stem Slicer, cleaner, Juicer, Pasteurization unit, and Filling and Sealing Unit, and a power supply of 5HP',
      'Served chilled with possibility to enrich with ginger and nannari flavor',
    ],
    benefits: [
      'Has the property of dissolving kidney stones',
      'Suitable for micro, small, and medium enterprise levels',
    ],
    developer: {
      name: 'K.N. Shiva, P. Suresh Kumar, K. Kamaraju, S. Uma',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirappalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Banana Male Bud Thokku (Pickle)',
    description:
      'The banana male bud, a waste material during crop production with less economic value, is converted into a high value-added product by making pickle (Thokku). The product is tasty and stable for a year at room temperature and suitable for all age groups.',
    salientFeatures: [
      'Development of a pickle using banana male flower bud, removal of pistil, blanching, grinding, and addition of spices and oil',
      'Standardized protocol and recipe for production',
      'Requires working capital of Rs 44,71,500, 1060 Sq.Ft. covered plinth area, 7 persons manpower, equipment like Steam Boiler, Mixer cum Grinder, frying pans, Pickle filling and packing machine/ pouch sealing machine, blancher, power supply of 5HP',
    ],
    benefits: [
      'Rich in dietary fiber',
      'Ideal choice with idly, dosa, chapathi, and even with rice items',
      'Employment generation to rural enterprise, particularly to women',
    ],
    developer: {
      name: 'C.K. Narayana and K.N. Shiva',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirappalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Banana Peel Pickle',
    description:
      'Nearly 25-35% of the green fruit is constituted by peel which is packed with nutrients and anti-oxidants. It can be utilized as source of raw materials for producing peel pickle by adding spices and preservatives. The peel of culinary purpose varieties [like Nendran, Monthan, Saba] can be utilized for making this product.',
    statusOfCommercialization: 'Awaiting Commercialisation',
    salientFeatures: [
      'Development of a pickle using the green peel of culinary banana varieties (Nendran, Monthan, Saba), peeling, cutting, blanching, grinding, and addition of spices and oil',
      'Being rich in dietary fibre, aids in digestion and good taste with idly, dosa, chapati, bread, etc.',
      'Requires a working capital of Rs 44,71,500, 1060 Sq.Ft. covered plinth area, 7 persons manpower, equipment like Steam Boiler, Mixer cum Grinder, frying pans, Pickle filling and packing machine/ pouch sealing machine, blancher, power supply of 5HP',
      'Replacement of semolina flour with up to 10% with banana peel flour results in fibre-rich pizza base',
      'Peel Flour (15%) incorporated muffin had more gas bubble formation in batter, springier muffins with greater aerated structure and volume, and improved muffin crust color',
    ],
    benefits: [
      'Different from normally available pickles in the market',
      'Good taste and stable for one year at room temperature',
      'Peel has anticancer properties',
      'Produced at a cheaper cost with raw materials available throughout the year',
      'Creates rural employment and revenue generation, particularly for the women sector',
      'Cheaper than commercial pickles available in markets',
    ],
    developer: {
      name: 'P. Suresh Kumar, K.N. Shiva, Amelia Keran D, K. Kamaraju, S. Uma',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirappalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Banana Starch Utilization',
    description:
      'India, the largest producer, produces 30.0 million tons of banana from 0.8 million ha, sharing one-fourth of world production. Multibillion loss of banana (both at farm and marketing channels) occurs due to huge wastage (25-30%) in on-farm and transportation. Isolation of starch and using it for the development of new products will pave the way to recover this waste partially.',
    statusOfCommercialization: 'Proven and awaiting commercialization',
    salientFeatures: [
      'Banana, with its higher quantity of starch and resistant starch offers greater extraction of starch than conventional sources',
      'Banana starch can supplement the starch demand and be used in food and non-food applications',
      'Starch can be used as supplementary in low glycemic products – making of bread, bun, cookies, cake, pasta, and noodles',
      'Modified starch used as supplementary in low glycemic products; new functional groups added to starch improve structural and functional properties',
      'Starch modification by enzymatic and chemical methods, requires minimal processing infrastructure including peelers, cabinet drier, pulverizer, hammer mills, sieves, packaging, and storage units',
    ],
    benefits: [
      'Varying functional and structural characteristics of different varieties (e.g., amylose, resistant starch, thermal properties)',
      'Useful for different food and industrial applications – cooking characteristics, swelling power, water holding capacity, freeze-thaw stability, and rheological behavior',
    ],
    developer: {
      name: 'P. Suresh Kumar, K.N. Shiva, Mr. A. Saravanan, S. Uma',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirappalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Banana Flour Utilization',
    description:
      'With the production of 30.0 million tons from an area of 0.8 million ha, India is the largest producer, contributing one fourth of world banana production. Utilization of green banana and plantain for its flour is of interest as a possible resource to make healthy functional products. One fifth of world bananas amounting 4-5 million tons are getting rejected in the export process due to quality issues. These bananas are mostly thrown, which cause environmental pollution and incur huge loss to the farmers as well as processors. In addition, plantain varieties, grown in 30% area are underutilized for their nutritive uses.',
    statusOfCommercialization: 'Proven and awaiting commercialization',
    salientFeatures: [
      'Due to higher resistant starch content in banana it could be used for making different functional and designer products',
      'Banana flour used as a gluten-free replacement to refine flour, wheat flour etc., for making varieties of baked goods like pizza, extruded snacks like pasta, noodles, and vermicelli products',
      'Banana flour incorporated bread, bun, and cake can be prepared by partial replacement of traditional maida (refined flour) and thus make the product with low gluten content',
      'Requires Bakery equipment, Homogenizer, extruders, boilers, packaging unit',
      'Cost Benefit Ratio varies from 1.28 to 1.71 depending on the type of product',
    ],
    benefits: [
      'It is a food with good prebiotic characteristics which could be consumed even by diabetic patients',
      'Low Glycemic products aid in lower absorption of carbohydrates and releases low sugar in blood and also enhances the activity of gut microflora and probiotics',
    ],
    developer: {
      name: 'P. Suresh Kumar, K.N. Shiva, D. Amelia Kiran, A. Saravanan, S. Uma',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirappalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Banana Juice with Basil Seeds',
    description:
      'The banana is not being utilized properly. The available products in the market are using the artificial banana essence and costlier hydrocolloids to make the suspended juices. The real benefit of banana juices for its coolant effect, rich potassium and magnesium is not fully exploited.',
    statusOfCommercialization: 'Proven and awaiting commercialization',
    salientFeatures: [
      'Over ripen banana was peeled and extracted juice.',
      'Banana juice can be prepared from over-ripen fruit added with basil seeds which provides high nutrient energy drink.',
      'Basil seeds are a good source of omega 3 and 6 fatty acids. Basil seed drink helps in weight loss, reduces body heat, prevents constipation, treats acidity and controls blood sugar levels.',
      'Addition of desired suspending agents for basil seed suspension, homogenization, pasteurization, cooling, KMS added as a preservative and bottling.',
      'Juice unit including steam kettle, pasteurizer, sealer, bottling unit, homogenizer.',
    ],
    benefits: [
      'Combating malnutrition and providing balanced nutrition.',
    ],
    developer: {
      name: 'P. Suresh Kumar, K.N. Shiva, D. Amelia Kiran, S. Uma',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirappalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Banana Peel Powder in Bakery Products',
    description:
      'After harvesting the fruit bunch of banana, huge plant biowaste is generated, out of which pseudostem (30-34%), flower & bracts (5%) and rhizome (12-14%) together they contribute 50 per cent of the banana plant biomass. Burning of pseudostem after harvest of the bunches leads to CO2 emission. Little quantity is being utilized in raw form for culinary purposes. Banana peel and central stem is rich in dietary fiber, protein, essential amino acids such as leucine, valine, phenyl alanine and theonine, the micronutrients like K, P, Ca, Mg, Fe and Zn, polyunsaturated fatty acids. They possess good antioxidant compounds like polyphenols, and catecholamines. It is used in food, pharmaceutical and medical drugs. Banana peel powder could be used as a functional replacement in a variety of bakery products like cookies, biscuits, muffin, health foods etc.',
    statusOfCommercialisation: 'The technology is Commercialized',
    salientFeatures: [
      'Good quality powder is produced from the bananas of the right variety and degree of ripeness.',
      'The process involves removal of outer sheath, using the central stem, slicing, drying, pulverizing, addition of sugar, fat and baking powder.',
      'Muffins are prepared by initially blending all wet ingredients together to form cream, and finally all dry ingredients were added to get batter consistency. Batter placed in greased muffin mould when baked at 180˚C for 25 minutes yield banana peel incorporated muffin with acceptable textural and sensory properties.',
      'By replacing 10-20% of all-purpose white flour (Maidha) with banana peel flour, the overall nutritious composition of muffin will be increased, without compromising any sensory appeal.',
      'Converting central stem into a value-added product will boost the income of the farmers by incorporating various flavors and multigrain biscuits.',
      'Cost Benefit Ratio: 1.69.',
    ],
    benefits: [
      'The product is delicious, crisp and stable for 3 months at room temperature. It is highly appreciated by consumers especially by children because of their soft texture and characteristic delicious taste.',
    ],
    training: 'Training is required on the minimal processing of central stem, drying and using it in bakery and confectionary products.',
    developer: {
      name: 'P. Suresh Kumar, K.N. Shiva, K. Kamaraju, S. Uma',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirapalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Cellulose Production from Banana Pseudo-stem and Peduncle',
    description:
      'After bunch harvest more than 50t/ha of pseudo-stem is left unutilized. This stem and peduncle could be used to produce cellulose. With the 8-lakh area under cultivation, a minimum of 40 Million tons of waste is generated. Banana fiber mainly composed of cellulose component, which is a complex carbohydrate. In addition to cellulose, fibers were also composed of hemicelluloses, lignin, wax and pectin, which will differ based on the chemical composition of variety of that fibers. The highest cellulose content in banana fibre was found to be in Nendran of about 60.72%.',
    statusOfCommercialisation: 'Proven and awaiting commercialization.',
    salientFeatures: [
      'Layers of sheath were used (11-13 layers) and shade drying of obtained sheath is done.',
      'Mechanical extraction is done using Raspador machine/Improved fiber extractor.',
      'Fibre was waxed for removal of pectin and gummy material, alkali treated to remove hemicelluloses and lignin content, and acid hydrolysis followed by bleaching was done to obtain pure cellulose.',
    ],
    benefitCostRatio: 2.27,
    benefits: [
      'Ferulic acid is produced from banana fibres as a source by fermentation method. Inoculum of co-cultures yields good recovery.',
      'Cellulose fibers were applied in the field of textile industry, as an adsorbent, chemical filters, as reinforcement biocomposites which shows similar objective of engineered fibres and acid hydrolysed fibres produces nano cellulose.',
    ],
    developer: {
      name: 'K.J. Jeyabaskaran, M.M.Mustaffa, R.Pitchaimuthu, T.Sekar',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirapalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Banana Pseudo-stem Fiber Extraction and Value-added Products',
    description:
      'Banana pseudo-stem is a waste material after the harvest. Annually 30 million tonnes of biomass is produced through banana cultivation from which 1.5 million tonnes of fibre could be extracted. The biomass production varies from 54.60 t/ha (Poovan) to 94.10 t/ha (Saba). In pseudo-stem, only 9-10 layers of sheath of the plant yield fibre. The quantity of biomass produced depends on the variety. The natural fiber has multifaceted uses in preparing many values added products such as handicraft items (table-mat, bag, wall hangings and other fancy articles, etc.), ropes, craft paper, etc. This may lead to rural employment and thereby, generation of additional income to the farming community.',
    statusOfCommercialisation: 'The technology has been commercialized.',
    salientFeatures: [
      'This is a process developed for using pseudo-stem for many value-added products. Banana fibre is extracted from the sheath of banana pseudo-stem by hand or machine. The fresh pseudo-stem yields about 1-1.5% of fibre.',
      'Two types of fibers can be obtained; Coarse fiber, from the outer sheath of banana pseudostem used for making garlands and Fine fiber, from middle layer sheaths of seven to eight, used for making handicraft items, shirts and sarees by blending with cotton or silk, after extracting thread manually.',
    ],
    capitalInvestment: 'A capital investment of Rs 22,09,625 is needed. A space of 1060 Sq.Ft. (500 Sq.Ft. Covered plinth area) is required along with working tables, Improved banana Fibre Extractor with power supply of 5 HP. Banana Pseudostem is required as raw material with manpower of 5.',
    benefitCostRatio: 1.76,
    benefits: [
      'This may lead to rural employment to the farming community, particularly women.',
      'It is natural fibre and eco-friendly in nature made from cheaply available waste as raw material.',
      'It has wide range of applications (textile, handicraft, absorbent, automobiles, etc.).',
    ],
    developer: {
      name: 'P. Suresh Kumar, K.N. Shiva, C.K. Narayana, P.Divya, K. Kamaraju, S. Uma',
      organization: 'ICAR-NRCB',
    },
    contactDetails: {
      director: 'directornrcb@gmail.com',
      email: 'directornrcb@gmail.com',
      address: 'ICAR-National Research Centre for Banana, Thogamalai Road, Thayanur Post, Tiruchirapalli, Tamil Nadu',
      website: 'https://www.nrcb.res.in',
    },
  }),
  new Technology({
    title: 'Innovative Decorative Wall Panels Using Banana Fibres',
    description:
      'ICAR-CIRCOT has developed innovative decorative wall panels using banana fibres. These panels provide an eco-friendly alternative for the conventional interior panel boards.',
    salientFeatures: [
      'This technology is suitable in the location where the banana pseudo-stem fibres are available. The production process is very simple and follows the compression molding technique. Novel colouring technology is used to colour the banana fibres for aesthetic look. The potential stakeholders are banana farmers, interior decorators and architects.',
      'Cost of the unit (as per 2019 costs or later): Rs. 20.00 lakhs for molding equipment and other accessories for starting one industry with a capacity of around 100 panels of size 2’ x 2’ per day.',
      'Cost of operation per unit size (as per 2019 costs or later) Rs. 2000 per batch of 100 panels.',
    ],
    benefits: [
      'Eco-friendly binder is used in the production process, making the entire product completely eco-friendly.',
      'It has very good acoustic property and aesthetic look.',
      'Has very good workability hence easy to cut in any shapes and sizes.',
    ],
    developer: {
      organization: 'ICAR-CIRCOT',
      location: 'Mumbai',
    },
    contactDetails: {
      director: 'director.circot@icar.gov.in',
      email: 'director.circot@icar.gov.in',
      address: 'ICAR-Central Institute for Research on Cotton Technology, Mumbai, Maharashtra',
      website: 'https://www.circot.res.in',
    },
  }),
  new Technology({
    title: 'Production of Disposable Paper Plates from Banana Pseudo-stem Fibres and Sugarcane Bagasse',
    description:
      'ICAR-CIRCOT has developed a technology for production of disposable paper plates from the banana pseudo-stem fibres and sugarcane bagasse. The conventional plastic coating of paper plate is replaced by a novel bee wax or sugarcane wax-based coating process.',
    salientFeatures: [
      'The production process is by pulping the raw materials followed by compression molding process. No binders/additives are used during processing; lignin present in the fibres act as the binder. This technology could be easily adopted in a place where the water source and the raw materials – banana pseudo-stem and sugarcane bagasse are available in plenty.',
      'Cost of the unit (as per 2019 costs or later): Rs. 40.00 lakhs for pulping and molding equipment for starting one industry which can produce 10,000 to 30,000 paper plates per day (depending on its size).',
      'Cost of operation per unit size (as per 2019 costs or later): Rs. 8,000 per batch of 20,000 paper plates.',
    ],
    benefits: [
      'The prepared paper plates had sufficient strength for holding the food items and acceptable aesthetic look.',
      'The potential stake holders are banana farmers, banana fibre extractors, sugarcane industries, Incubators / start-ups.',
    ],
    developer: {
      organization: 'ICAR-CIRCOT',
      location: 'Mumbai',
    },
    contactDetails: {
      director: 'director.circot@icar.gov.in',
      email: 'director.circot@icar.gov.in',
      address: 'ICAR-Central Institute for Research on Cotton Technology, Mumbai, Maharashtra',
      website: 'https://www.circot.res.in',
    },
  }),
  new Technology({
    title: 'Enrichment of Yoghurt with Wine Lees for Antioxidant Benefits',
    description:
      'As per an estimate, Indian wine industry is producing 20 million litre wines and generating about 1.2 thousand tons of red wine lees which is a waste product collected after 2nd racking. Its disposal is a major environmental problem. A technology has been developed in which yoghurt is enriched with wine lees and it can attract the consumers very fast when it will enter in the market with the tag of antioxidants.',
    statusOfCommercialisation: 'Ready for commercialization.',
    salientFeatures: [
      'Wine lees shows significant antibacterial properties as well as antioxidant properties and includes as spreads, none caloric thickeners, flavour enhancers, and functional food additive, such as β-glucans. The fine wine lees from fermentation of red grapes is source of natural colour also.',
      'Wine lees obtained from red wine of Cabernet Sauvignon has numerous properties like antioxidant activities, rheological properties beside natural colour and aroma.',
      'The raw material i.e. fine wine lees from red wines may be acquired from any winery on prior booking of the material.',
      'For processing of fine wine lees, equipment for freeze drying is required which will dry the lees at −65°C, 0.12 mBar pressure for 3–4 h to remove ethanol content and preserve maximum amount of phenolics content and anthocyanins.',
    ],
    benefits: [
      'Enriched yoghurt with wine lees is beneficial to health,',
      'It increased sensory acceptance.',
      'It acts as source of natural colour.',
      'It can be used as spreads, none caloric thickeners, flavour enhancers, and functional food additive, such as β-glucans.',
      'It will help in proper disposal of winery wastes.',
      '1.5:1 (Benefit Cost ratio).',
    ],
    training: [
      'Training on processing of wine lees by ICAR-NRCG while general training on yoghurt making by ICAR-NDRI, Karnal.',
    ],
    developer: {
      organization: 'Ajay Kumar Sharma, ICAR-NRCG',
      location: 'Pune',
    },
    contactDetails: {
      director: 'director.nrcg@icar.gov.in',
      email: 'director.nrcg@icar.gov.in',
      address: 'ICAR-National Research Centre for Grapes, PB No.3, Manjri Farm Post, Solapur Road, Pune-412307, Maharashtra',
      website: 'http://nrcgrapes.icar.gov.in',
    },
  }),
  new Technology({
    title: 'Cookies Enriched with Grape Pomace Powder for Antioxidant Benefits',
    description:
      'At present, 93 registered wineries exist in India. These wineries are generating about 3 lakh tones of grape waste. Its disposal is a major environmental problem. Wastes generated during wine and grape juice preparation have a huge quantity of phenolic compounds. The grape pomace from red wine and juice (Manjari Medika) contain viable functional ingredients and can be added in cookies to increase total phenolic content, radical scavenging activity, and dietary fibers.',
    statusOfCommercialisation: 'Ready for commercialization',
    salientFeatures: [
      'The raw material i.e. wine grape pomace from red wines and Manjari Medika, may be acquired from any winery or grape juice industry on prior booking.',
      'The cookies are developed by processing wine grape pomace powder, alteration in normal process of cookies making, and the product is also very specific.',
      'The addition of grape pomace powder obtained from red wines increased antioxidant properties comprising ferric reducing antioxidant power, total phenol content, flavonoid, and anthocyanin.',
      'Wine grape pomace powder imparts brown color to cookies as compared to control. Improved sensory properties were recorded in cookies enriched by addition of wine grape pomace powder.',
      'The developed technology can be adopted without investing more money for creating extra facilities.',
    ],
    benefits: [
      'Increase nutritive value of the product.',
      'The technology will also encourage proper disposal of winery and juice wastes which will reduce impact on the environment and provide additional return.',
      'Benefit in monetary terms.',
    ],
    training: [
      'General training on cookies making from any ICAR institute having bakery facilities while training on grape pomace powder processing from ICAR-NRCG.',
    ],
    developer: {
      organization: 'Ajay Kumar Sharma, ICAR-NRCG',
      location: 'Pune',
    },
    contactDetails: {
      director: 'director.nrcg@icar.gov.in',
      email: 'director.nrcg@icar.gov.in',
      address: 'ICAR-National Research Centre for Grapes, PB No.3, Manjri Farm Post, Solapur Road, Pune-412307, Maharashtra',
      website: 'http://nrcgrapes.icar.gov.in',
    },
  }),
  new Technology({
    title: 'Ice Cream Enriched with Fine Wine Lees for Nutraceutical Benefits',
    description:
      'As per an estimate, Indian wine industry is producing 20 million liter wines and generating about 1.2 thousand tons of red wine lees. Its disposal is a major environmental problem. Presently, waste material is disposed by burning in open fields or flowed in water bodies without attempting environmental issues which results in loss of potential source of organic matter and valuable plant nutrients. The fine wine lees are a waste product collected after 2nd racking in the process of red wine making, and is having significant antibacterial and antioxidant properties which is found suitable as spreads, non-caloric thickeners, flavour enhancers, and functional food additive, such as β-glucans. Addition of processed fine wine lees can significantly affect the physico-chemical parameters of ice cream. This is a technology of preparation of ice cream with higher nutraceutical properties by utilization of wastes from the wine industry.',
    statusOfCommercialisation: 'Ready for commercialization',
    salientFeatures: [
      'The raw material i.e. fine wine lees from red wines may be acquired from any winery on prior booking of the material.',
      'For processing of fine wine lees, equipment for freeze drying is required which will dry the lees at −65 °C, 0.12 mBar pressure for 3–4 h to remove ethanol content and preserve maximum amount of phenolics content and anthocyanins.',
      'It has a high level of antioxidants and with this low sugar ice-cream can be produced.',
    ],
    benefits: [
      'Enriched ice cream will be helpful in improving the functional properties of the product and intake of this specific product will certainly have health benefits, which can’t be quantified in terms of rupees.',
      'The technology will encourage proper disposal of winery wastes which will reduce the impact on the environment.',
      'Enriched ice-cream has health benefits including nutritional, functional properties, delayed melting, and attractive natural color with excellent aroma.',
    ],
    training: [
      'Training on ice cream making can be acquired from any NDRI, Karnal.',
    ],
    developer: {
      organization: 'Ajay Kumar Sharma, ICAR-NRCG',
      location: 'Pune',
    },
    contactDetails: {
      director: 'director.nrcg@icar.gov.in',
      email: 'director.nrcg@icar.gov.in',
      address: 'ICAR-National Research Centre for Grapes, PB No.3, Manjri Farm Post, Solapur Road, Pune-412307, Maharashtra',
      website: 'http://nrcgrapes.icar.gov.in',
    },
  }),
  new Technology({
    title: 'Grape Pomace as a Functional Ingredient in Bakery Products',
    description:
      'Winery and grape juice industry byproducts, grape pomace, is a viable functional ingredient which can be used in bakery products to increase total phenolic content, radical scavenging activity, and dietary fibers. This technology has potential to utilize waste generated from the wine or grape juice industry.',
    statusOfCommercialisation: 'Technology transferred to a bakery at Pune',
    salientFeatures: [
      'Grape pomace powder imparts dark brown to light red color to breads, while pomace powder of Manjari Medika imparts a very attractive red color to breads.',
      'Attractive natural color contains anthocyanins, phenols, fibers, etc.',
      'The raw material, i.e., grape pomace from red and white wines or Manjari Medika grapes, may be acquired from any winery or juice industry.',
      'The replacement of maida through addition of pomace powder from different sources like red and white wine grape varieties and Manjari Medika (grape juice variety) increased antioxidant properties.',
      'Processing and proper storage of skin powder is needed to avoid the presence of microbes.',
    ],
    benefits: [
      'The developed technology can be adopted without investing much capital for creating extra facilities.',
      'Enriched breads have improved functional properties and intake of enriched and attractive breads will have health benefits.',
      'Proper disposal of winery and juice industry wastes.',
    ],
    training: [
      'General training of bread making can be acquired from any ICAR institute having bakery facilities, and training on pomace powder processing will be provided by ICAR-NRCG.',
    ],
    developer: {
      organization: 'Ajay Kumar Sharma, ICAR-NRCG',
      location: 'Pune',
    },
    contactDetails: {
      director: 'director.nrcg@icar.gov.in',
      email: 'director.nrcg@icar.gov.in',
      address: 'ICAR-National Research Centre for Grapes, PB No.3, Manjri Farm Post, Solapur Road, Pune-412307, Maharashtra',
      website: 'http://nrcgrapes.icar.gov.in',
    },
  }),
  new Technology({
    title: 'Cymbidium Orchids Leaves Utilization for Basket Weaving',
    description:
      'The leaves of Cymbidium orchids are up to 1 meter long, and old pseudo bulbs shed their leaves every year due to their sympodial growth habit. One full-grown plant sheds on average 10-12 leaves per year, and these leaves go to waste. These dried leaves are very strong and can be utilized for weaving baskets. The baskets made from these leaves are durable, aesthetically pleasing, and degradable, thus reducing farm waste.',
    statusOfCommercialisation: 'Technology already transferred',
    salientFeatures: [
      'It is an eco-friendly product made from dried leaves of Cymbidium orchids, found good for women empowerment. The women farmers can weave easily by coiling and tying the leaves.',
      'These baskets can be useful for multiple purposes. Farmers will earn rupees 150-200/- per basket, improving the livelihood of women farmers. Baskets being made are organic and can be used for decorative purposes in the domestic market.',
      'This technology is recommended for adoption in any hilly state, especially for city dwellers.',
    ],
    training: [
      'Training is available at ICAR-National Research Centre on Orchids, Pakyong, Sikkim.',
    ],
    developer: {
      organization: 'D. R. Singh, Raj Kumar, D. Barman, P. Ravi Kishore, ICAR-NRCO',
      location: 'Sikkim',
    },
    contactDetails: {
      director: 'director.nrco@icar.gov.in',
      email: 'director.nrco@icar.gov.in',
      address: 'ICAR-National Research Centre for Orchids, Sikkim',
      website: 'www.nrcorchids.nic.in',
    },
  }),
  new Technology({
    title: 'Steam Distillation for Essential Oil Extraction from Seed Spices Residues',
    description:
      'Steam distillation is a common technique used for essential oil extraction from medicinal and herbal plants. Value-added forms of spices have become a thrust area with tremendous potential. The global market is shifting from commodity to value-added products. India exports raw seed spices as well as their value-added items to around 70 countries. After harvesting the economic product (seeds), considerable crop residues remain unutilized. These residues contain significant essential oil and need to be extracted to substantiate farm income.',
    statusOfCommercialisation: 'Technology is ready for commercialization',
    salientFeatures: [
      'Steam distillation technique can be used for essential oil extraction from seed spices which is economically viable and enhances the income of seed spice stakeholders.',
      'By using this technology, essential oil from crop residues of seed spices under extreme hot climate can be extracted.',
      'Modification in the existing technology utilizes 10% of required water for condensation.',
      'Residues can be utilized, which otherwise are of no use, providing an additional source of income to seed spices growers.',
      'Installation of steam distillation unit with the capacity of 40-50 Kg per batch costs less than Rs. 2.0 lakh for initial investment and operating cost of Rs. 1.5 lakh.',
    ],
    benefit: [
      'Residues may be utilized, which otherwise are of no use, providing an additional source of income to seed spices growers.',
    ],
    training: [
      'Only normal skills are required, and the training can be imparted by NRCSS, Ajmer.',
    ],
    developer: {
      organization: 'S. N. Saxena, R. K. Kakani, R. K. Solanki, ICAR-NRCSS',
      location: 'Ajmer, Rajasthan',
    },
    contactDetails: {
      director: 'nrcss.director@gmail.com',
      email: 'nrcss.director@gmail.com',
      address: 'ICAR- National Research Centre on Seed Spices, Ajmer, Rajasthan',
      website: 'www.nrcss.res.in',
    },
  }),
  new Technology({
    title: 'Pomegranate Peel Waste Utilization for Polyphenol Extraction in Poultry',
    description:
      'Fruit juice processing workshops produce large quantities of pomegranate peels, considered as processing wastes. Chromatographic analysis revealed that these waste materials contain valuable polyphenols, known to have antimicrobial, antioxidant, and hepato-protective activities in animals. These golden wastes could strategically be used as a source material for low-cost extraction of polyphenols in water solvent using the hot infusion method. Pomegranate peel infusion improves performance in broiler and layer birds when supplemented daily.',
    statusOfCommercialisation: 'Technology is proven and awaiting commercialization',
    salientFeatures: [
      'Pomegranate peel wastes are shade dried for 4 days and then ground into coarse powder. This powder is the raw material used for pomegranate peel infusion.',
      'The powder is extracted with warm water in a glass container and crude extract is filtered twice using muslin cloths. The pomegranate peel infusion, thus prepared, is kept in dark-colored containers away from sunlight. The infusion should be used within 48 hours of preparation.',
      'Broilers or layer birds show better performance in terms of liveability, body weight gain, and feed conversion ratio when supplemented with this infusion in drinking water at low dose levels.',
      'Cost for production of 100 liters of peel infusion is estimated to be only Rs.110.00.',
    ],
    benefit: [
      'The method of green extraction of pomegranate peel wastes is simple and does not require any sophisticated instrument. This extraction can be accomplished in a food processing workshop itself as an additional income generation avenue.',
      'When peel infusion is supplemented in poultry birds, the Benefit Cost Ratio from the flock becomes 2.13, which is 3% more than the un-supplemented group of birds.',
    ],
    developer: {
      organization: 'Sarbaswarup Ghosh, Sasya Shyamala KVK, W.B.; Paresh Nath Chatterjee, WBUAFS, Kolkata',
      location: 'West Bengal',
    },
    contactDetails: {
      directorResearch: 'arunasisvet@gmail.com',
      email: 'arunasisvet@gmail.com',
      address: 'West Bengal University of Animal & Fishery Sciences, Kolkata, West Bengal',
      website: 'http://wbuafscl.ac.in',
    },
  }),
  new Technology({
    title: 'Polysaccharide Extraction from Lasora (Cordia myxa) Fruit Mucilage',
    description:
      'Lasora (Cordia myxa) is a potential underutilized fruit plant in arid and semi-arid regions of India. It finds uses in health, nutrition, and curing certain human ailments in traditional medicine systems. Unripe fresh fruits are widely used for vegetable and pickle at a time when availability of conventional vegetables is scarce. However, the ripened fruit pulp has transparent and very sticky mucilage surrounding the stone which makes it unsuitable for consumption. On average, 10% w/w mucilage can be obtained from ripened fruits. Polysaccharide has been extracted and purified from fruit mucilage.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'Process for polysaccharide extraction has been optimized. It involves heating and mechanical stirring of mucilage, precipitation with solvent and dilute acid followed by purification and drying by lyophilisation.',
      'Fine off-white powder of polysaccharide is obtained.',
      'The powder on reconstitution can be used as an emulsifying and thickening agent in foods.',
      'It also showed good film-forming properties and thus can be used in coating applications.',
    ],
    benefit: [
      'A large quantity of ripened fruit which goes waste due to lack of utility can be exploited for polysaccharide extraction.',
    ],
    training: 'Laboratory scale training is imparted by ICAR - Central Arid Zone Research Institute, Jodhpur.',
    developer: {
      organization: 'Saurabh Swami, P.R. Meghwal, Akath Singh, Om Prakash, ICAR- CAZRI, Jodhpur',
      location: 'Rajasthan',
    },
    contactDetails: {
      director: 'director.cazri@icar.gov.in',
      email: 'director.cazri@icar.gov.in',
      address: 'ICAR-Central Arid Zone Research Institute (CAZRI), Jodhpur, Rajasthan',
      website: 'www.cazri.res.in',
    },
  }),
  new Technology({
    title: 'Product Development from Non-Edible Portions of Fruits and Vegetables',
    description:
      'Processing of fruits and vegetables results in different kinds of waste, such as citrus peel, banana peel, watermelon peel etc., i.e. non-edible portion of fruit. After processing, it accounts for about 10-60% of the total weight of the fresh produce. Such waste poses increasing disposal and potentially severe pollution problems and represents a loss of valuable biomass and nutrients.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'This is a product developed by using the white portion of watermelon.',
      'The process involved chopping, boiling, straining, boiling in sugar syrup for 10 minutes, mixing with three different colors and resting for half an hour, drain it, dry under sunlight.',
      'Being rich in Vitamin A, C, Potassium, and magnesium.',
      'A very good test with cakes, cookies, ice cream and sweets.',
    ],
    benefit: [
      'The product is different from normally available cherries in the markets.',
      'It gives good taste and is stable for 6 months at room temperature.',
      'It can be produced at a cheaper cost and raw materials are available throughout the year.',
      'It creates rural employment and revenue generated to rural population. It provides employment generation to rural enterprises, especially women.',
      'The cost of cherries is cheaper than the cherries available in the market.',
    ],
    training: 'The training is imparted by KVK, ICAR-CAZRI, Jodhpur.',
    developer: {
      organization: 'Savita Singhal, Poonam Kalash & B.S.Rathore, KVK, ICAR-CAZRI, Jodhpur',
      location: 'Rajasthan',
    },
    contactDetails: {
      director: 'director.cazri@icar.gov.in',
      email: 'director.cazri@icar.gov.in',
      address: 'ICAR-Central Arid Zone Research Institute (CAZRI), Jodhpur, Rajasthan',
      website: 'www.cazri.res.in',
    },
  }),
  new Technology({
    title: 'Low Cost Technology for Cultivation of Oyster Mushroom Utilizing Coconut Wastes',
    description:
      'A low-cost technology has been developed for the cultivation of oyster mushrooms utilizing coconut wastes such as leafstalk, bunch waste, leaflets, etc. Coconut wastes are chopped to 5-7 cm long pieces and soaked in water overnight. Excess water is drained off and substrates are sterilized by steam pasteurization in an autoclave at 1.02 kg cm2 pressure for 1½ h. The substrate is then filled in polybags and inoculated with spawn @ 100 g per bag containing 3-3.5 kg substrate. Sterilized rice bran is added @ 5% as an organic supplement. The bags are incubated for spawn run in a mushroom house for 15-20 days. After the spawn run, the polythene cover is ripped open and the compact cylindrical bed is sprayed with water two or three times daily. The first flush of mushroom fruiting bodies is ready in 5-10 days after opening of the bag. Three to four crops can be harvested from each bed. The technology is a source of employment and income for many women self-help groups, unemployed youth, and rural folk and is a right step in the direction of ‘Atmanirbhar Bharat’.',
    statusOfTechnologyTransfer: 'The technology is already commercialized.',
    salientFeatures: [
      'Mushroom produced on coconut wastes is nutritionally rich and medicinally important food item.',
      'It contains 20-30% protein on dry weight basis and is a rich source of minerals, vitamin C, and vitamin B complex.',
      'The technology does not need any additional land requirement and utilizes the waste materials available in farmers’ coconut gardens.',
      'The spent mushroom substrate obtained after harvesting of mushrooms can be used for compost/ vermicompost production.',
    ],
    benefit: [
      'Through this technology, the lignin-rich coconut wastes are easily converted to a useful edible protein source.',
      'This technology can not only be the source of income but also provide nutritional security to the impoverished farm families.',
    ],
    training: 'Three-days training for production of mushrooms from coconut wastes is given at ICAR-CPCRI, Kasaragod, Kerala.',
    developer: {
      organization: 'George V Thomas, Alka Gupta, Murali Gopal, ICAR-CPCRI, Kerala',
      location: 'Kasaragod, Kerala',
    },
    contactDetails: {
      director: 'anithakarun2008@gmail.com',
      email: 'anithakarun2008@gmail.com',
      address: 'ICAR-Central Plantation Crops Research Institute, Kasaragod, Kerala',
      website: 'www.cpcri.gov.in',
    },
  }),
  new Technology({
    title: 'Coconut Waste to Biochar Technology',
    description:
      'Coconut plantations and coconut-based cottage industries generate close to 25 million MT of biomass wastes annually in India. They are an ideal feed-stock for producing biochar owing to high lignin content. Biochar is a solid, carbon-rich, value-added product obtained by pyrolysis of residues from agriculture, forestry, animals, etc., under limited or no oxygen environments. A technology was developed at ICAR-CPCRI to convert coconut wastes such as tender coconut husks, mature coconut husks, coconut petioles, etc., into biochar by their pyrolysis under oxygen-limiting conditions using a simple charring kiln. The coconut wastes are suitable for biochar conversion with a turnover of 40-50% on weight-by-weight basis.',
    statusOfTechnologyTransfer: 'The technology is proven, yet to be commercialized.',
    salientFeatures: [
      'The biochar produced from coconut wastes is sustainable and an excellent soil amendment.',
      'It is carbon-rich, black, lightweight, and porous.',
      'High alkalinity and good ash content make it fit for remediating acid soils.',
      'High potassium content in these biochars could help reduce the use of inorganic K.',
      'It can be produced easily at farmers’ level.',
    ],
    benefit: [
      'Coconut waste biochars are highly suitable as organic input for improving soil health and fertility of poor degraded soils.',
      'They enhance the crop production capacities of soils by improving the physical properties, increasing the soil pH, and adding valuable organic carbon and potassium.',
      'Combination of coconut biochars with coconut leaf vermicompost or coir-pith compost is an excellent soil amendment for humid tropical soils.',
      'The technology helps in converting environmentally hazardous wastes such as tender nut husks to useful agro-product.',
    ],
    training: 'One-day training for production of biochar is given at ICAR-CPCRI, Kasaragod, Kerala.',
    developer: {
      organization: 'Murali Gopal, Alka Gupta, S. Neenu, George V Thomas, ICAR-CPCRI, Kerala',
      location: 'Kasaragod, Kerala',
    },
    contactDetails: {
      director: 'anithakarun2008@gmail.com',
      email: 'anithakarun2008@gmail.com',
      address: 'ICAR-Central Plantation Crops Research Institute, Kasaragod, Kerala',
      website: 'www.cpcri.gov.in',
    },
  }),
  new Technology({
    title: 'Decentralized On-Farm Bioinoculant Production Method',
    description:
      'A simple and economically viable method for mass-multiplication of plant-beneficial bacterial and fungal inoculants (bioinoculants) is developed for the benefit of the farmers. This decentralized on-farm bioinoculant production by farmers paves the way for enhanced adoption of bioinoculant technology by farmers, helping them to improve their farm soil health and fertility and ultimately crop production capacity.',
    statusOfTechnologyTransfer: 'The technology is yet to be commercialized.',
    salientFeatures: [
      'The method utilizes locally available wastes such as mature coconut water and rice gruel (1:1 ratio) synergistically blended with biochar, as a medium for on-farm production of contaminant-free bioinoculants.',
      'The method produces aqueous bioinoculant formulation that can be easily applied as seed treatment, seedling dip, soil drenching, and foliar spray and is suitable for immediate field application.',
      'Contamination-free bioinoculants containing BIS stipulated population of bacteria or fungi can be obtained.',
    ],
    benefit: [
      'The method also circumvents the necessity for storage of the bioinoculants as they can be produced and used immediately.',
      'The method, if practiced by individual farmers or groups of farmers, can greatly reduce the carbon footprint for bioinoculant mass-multiplication because of the decentralized approach.',
    ],
    training: 'Three-days training for farm level production of bioinoculants is given at ICAR-CPCRI, Kasaragod, Kerala.',
    developer: {
      organization: 'Murali Gopal, Alka Gupta, George V Thomas, ICAR-CPCRI, Kerala',
      location: 'Kasaragod, Kerala',
    },
    contactDetails: {
      director: 'anithakarun2008@gmail.com',
      email: 'anithakarun2008@gmail.com',
      address: 'ICAR-Central Plantation Crops Research Institute, Kasaragod, Kerala',
      website: 'www.cpcri.gov.in',
    },
  }),
  new Technology({
    title: 'Soilless Medium for Sustainable Agriculture Using Coconut Biomass Residues',
    description:
      'The technology of raising crops in soilless medium as an alternative to arable land agriculture is getting prominence in the current climate change scenario. Recycled coconut biomass residues such as coconut leaf vermicompost and urea-free coir-pith compost are used as inputs in appropriate ratio to prepare soilless medium because they are environmentally friendly and sustainable. The soilless medium mixture is added with plant-beneficial bioinoculants {both bacterial and fungal plant growth promoting rhizobacteria (PGPR)} which further helps in production of healthy and robust seedlings.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'Soilless medium is entirely coconut wastes-based recycled product; is fully organic and of sustainable nature.',
      'It aids in quick germination of seeds and production of disease-free, organically-raised seedlings.',
      'The seedlings raised in soilless medium develop robust root systems.',
      'It can be used for production of seedlings of high value vegetable, flower, spice and even plantation crops.',
    ],
    benefit: [
      'It is important for healthy and organic vegetable production in an urban scenario and in nursery management of agri-horti-forestry crops.',
      'It is an excellent potting mixture for all types of polybags/ grow bags or pot cultivation in peri-urban farming.',
    ],
    training: 'One day training for preparation of soilless medium is given at ICAR-CPCRI, Kasaragod, Kerala.',
    developer: {
      organization: 'Murali Gopal, Alka Gupta, P. Chowdappa, ICAR-CPCRI, Kerala',
      location: 'Kasaragod, Kerala',
    },
    contactDetails: {
      director: 'anithakarun2008@gmail.com',
      email: 'anithakarun2008@gmail.com',
      address: 'ICAR-Central Plantation Crops Research Institute, Kasaragod, Kerala',
      website: 'www.cpcri.gov.in',
    },
  }),
  new Technology({
    title: 'Utilization of Coconut Milk Residue, Virgin Coconut Oil Cake, and Coconut Testa in Food Products',
    description:
      'Coconut milk residue (CMR), virgin coconut oil (VCO) cake, and coconut testa (CT) are the coproducts of coconut processing industries which are either under or not utilized. These are rich in dietary fibers, protein, fat, and antioxidant activity. The inclusion of these waste products in extrusion, bakery, and confectionery production lines resulted in fiber, minerals, and nutrient-rich food products at an affordable cost.',
    statusOfTechnologyTransfer: 'Commercialized and transferred to:\n1. Smt Raksha. Dayanand, # 50 C S Mansion, Church Street, Bangalore, Pin – 560001, Karnataka, India, Mob – 9448487635/ 7760111477.\n2. M/s Perambra Coconut Producer Company, 2nd floor, Alankar Arcade, Perambra P.O, Kozhikode, Kerala-673525 India Mob - 9895105622.',
    salientFeatures: [
      'It comprises multiple principles such as extrusion, baking, caramelization, and moulding.',
      'Mixing the ingredients (CMR flour / VCO cake flour / CT flour 15%) with 85% Broken rice flour / Maize flour / Millets flour) → Extrusion → Drying → Packaging OR with bakery raw materials (Maida, Ghee, sugar powder etc.) → Moulding → Baking → Packaging OR with cocoa powder → Conching → Tempering → Mixing with flavors and other ingredients → Molding → Packaging.',
      'Integrated processing unit for value addition of coconut processing industries-based waste products into extrudate, bakery, and confectionery products.',
    ],
    benefit: [
      'Nutritional benefit',
      'Employment generation',
    ],
    training: 'Training is imparted by ICAR-Central Plantation Crops Research Institute (CPCRI), Kasargod.',
    developer: 'M.R.Manikantan, R.Pandiselvam, and Shameena Beegum',
    contactDetails: {
      director: 'anithakarun2008@gmail.com',
      email: 'anithakarun2008@gmail.com',
      address: 'ICAR-Central Plantation Crops Research Institute, Kasaragod, Kerala',
      website: 'www.cpcri.gov.in',
      additionalContact: 'director.ciphet@icar.gov.in, ICAR-Central Institute of Post-harvest Engineering & Technology, Ludhiana, Punjab (www.ciphet.in)',
    },
  }),
  new Technology({
    title: 'Aqueous Extraction of Pectin from Citrus Peel Powder',
    description:
      'The process involved the use of organic acid while aqueous extraction from citrus peel powder. The process comprises of peel drying, grinding, aqueous extraction, straining, drying of pectin clump, lifting dried flake, powdering, and purification. The yield of 10-15% purified pectin (on dry weight basis) can be obtained depending upon the citrus variety chosen for pectin extraction. The process can be applied to any citrus peel with slight variation in processing time. Extracted pectin can be used in the food industry as a thickener, emulsifier, texturizer, and stabilizer. It can also be added in jams and jellies as a gelling agent. It has also been used as a fat substitute in spreads, ice-cream, and salad dressings and is a part of soluble dietary fibre.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'The peel of pre-mature dropped fruits and waste originated of citrus processing industries can be utilized for pectin extraction.',
      'The system consists double jacketed kettle with stirrer, Hydraulic press/ screw press, Holding tank, Tray dryer, Solvent extractor/ rotary evaporator, pumps, industrial grade citric acid and ethanol, Grinder/hammer mill.',
    ],
    benefit: [
      'Less environmental pollution.',
      'Utilization of waste material.',
      'More revenue generation of otherwise waste material.',
      'The technology has potential for import substitution worth Rs. 70 crore.',
    ],
    training: 'Training and licensing of the technology is imparted by ICAR-Central Institute of Post-Harvest Engineering and Technology (CIPHET), Ludhiana.',
    developer: 'Sunil Kumar, ICAR-CIPHET, Ludhiana',
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana, Punjab',
      website: 'www.ciphet.in',
    },
  }),
  new Technology({
    title: 'Face Pack and Face Toner from Kinnow Peel Extracts',
    description:
      'Face pack and face toner were prepared from Kinnow peel and its extracts. The face pack was made from dried Kinnow peels. The face pack prepared from kinnow peel is a rich blend of major concentrate of Kinnow peel powder and its extracts, and other minor components as thickener, adherent and preservative. Kinnow peel pack has all the properties of a standard face pack i.e. it is a smooth paste and has natural pleasant odour. It also has cleansing, tightening and refreshing effects on skin and is non-toxic.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'This product has been developed using a natural extract from Kinnow peel using safe, cheap and readily available solvents or through aqueous extraction procedures.',
      'The face care systems possess disinfectant and antiseptic properties which help in protecting facial skin from general pathogens. Kinnow peel is a rich source of vitamin C, carotenoids, limonene, antioxidants, micronutrients and antibacterial limonoids.',
      'The products developed are low cost products prepared using a very simple indigenous technology which can be easily taken up by an entrepreneur and promoted in the market.',
    ],
    benefit: [
      'Kinnow peel Face care system has nourishing, healing, cleansing and astringent effects. CIPHET GLOW U Face Care System improves the condition of the skin & keeps it soft, more supple and free from other skin disorders upon regular use.',
    ],
    training: 'Training and licensing of the technology is imparted by ICAR-Central Institute of Post-Harvest Engineering and Technology (CIPHET), Ludhiana.',
    developer: 'D.S. Uppal, H.S. Oberoi, R.T.Patil, ICAR-CIPHET, Ludhiana',
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana, Punjab',
      website: 'www.ciphet.in',
    },
  }),
  new Technology({
    title: 'Production of Amylase and Protease Enzymes from Potato Peel Waste',
    description:
      'Potato processing industries produces peel as waste every day. They have to get rid of this waste. This is an environmental problem also. Amylase and protease enzymes are very much useful for various industries. Use of Bacillus group of bacteria produces amylase and protease enzymes from potato peel waste.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'For production of amylase and protease enzymes from potato processing industrial waste.',
      'Amylase - 4665/50 hr batch; Protease - 14.76 gm/50 hr batch.',
    ],
    benefit: [
      'Add value to waste from potato processing industry which is otherwise poses disposal issues.',
    ],
    training: 'Training is imparted by Junagadh Agriculture University (JAU), Junagadh (Gujarat).',
    developer: 'A M Joshi and M. N. Dabhi, JAU, Junagadh (AICRP on PHET)',
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana, Punjab',
      website: 'www.ciphet.in',
    },
  }),
  new Technology({
    title: 'Utilization of Cashew Apple for Beverage Production',
    description:
      'In India about 70 lakh MT of cashew apples are produced and only 5-7% of it is currently utilized. Due to short shelf life and the presence of astringency cashew are not utilized properly. After removal of astringency i.e., tannin the decanted juice is used to prepare different beverages. Inputs used: Cashew apple, sugar, KMS, citric acid, polyvinyl pyrolidone.',
    statusOfTechnologyTransfer: 'Technology transferred to NGOs, SHGs at production catchments',
    salientFeatures: [
      '100 kg of cashew apple and 30 kg sugar produces 400 bottle of RTS with 200 ml capacity.',
      '100 kg. Cashew apple and 26 kg sugar gives 75 bottles of squash with 750 ml capacity.',
    ],
    benefit: [
      'Add value to waste from cashew plantation.',
    ],
    training: 'Training and licensing of the technology is imparted by OUAT Bhubneshwar.',
    developer: 'N. R. Sahoo, OUAT, Bhubneshwar (AICRP on PHET)',
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana, Punjab',
      website: 'www.ciphet.in',
    },
  }),
  new Technology({
    title: 'Utilization of Patchouli Spent Charge in Agarbatti Production',
    description:
      'Patchouli spent charge, the by-product (waste) obtained after extracting essential oil from patchouli herbage was sun dried and ground to 20-40 mesh powder using a shredder and a grinder. This powder can be substituted (up to 10%) for the wood powder normally used at about 15% level in the manufacture of agarbatti base sticks which are subsequently dipped in fragrance solutions to get commercial agarbattis. Since, the \'spent charge’ powder also contains about 0.1-0.5% aromatic essential oil, the agarbattis can have added patchouli smell. Wherever patchouli oil is used in the agarbatti dip (fragrance) solution, in such cases, the costly essential oil usage is either reduced / replaced by using the above agarbatti base sticks prepared using the ‘spent charge’ powder.',
    statusOfTechnologyTransfer: 'Ready for commercialization',
    salientFeatures: [
      'Wood powder, one of the raw materials used in the manufacture of agarbatti @15% level, can be replaced advantageously up to 10% with the powdered by-product namely, ‘patchouli spent charge’ with improved quality characteristics.',
      'Up to ⅔ of wood powder requirement in agarbattis is substituted with ‘patchouli spent charge’ powder (waste material).',
    ],
    benefit: [
      'This powder can be substituted (up to 10%) for the wood powder normally used at about 15% level in the manufacture of agarbatti base sticks.',
    ],
    training: 'Training is imparted by Junagadh Agricultural University, Junagadh.',
    developer: 'H. G. Ramya, V. Palanimuthu, Vasundhra and Dayanand Kumar, JAU, Junagadh (AICRP on PHET)',
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana, Punjab',
      website: 'www.ciphet.in',
    },
  }),
  new Technology({
    title: 'Utilization of Cassava Stem for Particle Board Manufacturing',
    description:
      'Cassava (Manihot esculenta Crantz) is mainly cultivated for its root starch. The non-root biomass of cassava includes stem and leaves. The stem to root ratio varied between 0.19 to 0.85 with an average value of 0.50, which depends on the growing location, variety, and maturity of the crops while harvest. Cassava is propagated through stem cuttings and only 15% is required for the planting, and only a small proportion for domestic fuel and the rest is reincorporated into the soil or burned off in the field itself. Hence, by considering the stem to root ratio of 0.50, in India the total quantity of cassava stem comes about 2.33 million tonnes. The cassava stem contains, about 15-39% starch, 22.80-40% cellulose, 10-28.8% hemicellulose, and 11.8-22.10% lignin on a dry weight basis. These data showed that cassava stem has enormous potential to be the raw material for particle board manufacturing because it has the lignocellulosic fibre.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'Based on the physico-mechanical properties of the board, among the different synthetic resins, urea formaldehyde was found to be the best resin for the production of particle board.',
      'Among the different modified starches viz., starch succinate, oxidized starch and cross linked starches used as binders, the starch succinate was found to be better to improve the mechanical and hydrophobic properties of the board. Also properties can be improved by blending with fibres and wax.',
      'Technology developed will help us to produce environment friendly “green” particle board utilizing native/modified starch as bioadhesive from cassava stem alone or blended with other lingo-cellulosic agro-residues.',
    ],
    benefit: [
      'Synthetic polymers used in particle board preparation causes formaldehyde emission creating adverse health and environmental issues. Hence cassava starch was used as bioadhesive and optimum conditions for the environment friendly “green” board preparation was pressure 60 bar, time 15min and starch 15% with 10% plasticizer.',
    ],
    training: 'Training is imparted by ICAR-Central Tuber Crops Research Institute (CTCRI), Thiruvananthapuram.',
    developer: 'Sajeev M.S. Krishnakumar T and Jyothi A. N., ICAR-CTCRI, Kerala (AICRP on PHET)',
    contactDetails: {
      director: 'director.ciphet@icar.gov.in',
      email: 'director.ciphet@icar.gov.in',
      address: 'ICAR-Central Institute of Postharvest Engineering & Technology, Ludhiana, Punjab',
      website: 'www.ciphet.in',
    },
  }),
  new Technology({
    title: 'Preparation of Value-Added Food Products from Cashew Apples',
    description:
      'Cashew being a major fruit crop of the region and considering the surplus availability of cashew apples, its nutritional value, there exists huge scope for preparation of value-added food products.',
    statusOfTechnologyTransfer: 'Technology is ready for transfer',
    salientFeatures: [
      'The crunch is sugar treated chewing crunchy bites.',
      'It is prepared by utilizing the cashew apples and then treating the same in various sugar concentration and then made in the form of chewing bites.',
      'Technology does not require costly equipment’s, easy and simple.',
      'The products store well at room temperature for 12 months with simple packing without any synthetic preservatives.',
    ],
    benefit: [
      'The potential beneficiaries are cashew farmers, agri-entrepreneurs, self-help groups, small and medium scale food processing industries.',
      'The technology ensures additional return through apple utilization and generation of employment opportunities.',
    ],
    training: 'ICAR – Central Coastal Agricultural Research Institute, Old Goa, Goa.',
    developer: 'A. R Desai, ICAR-CCARI, Goa',
    contactDetails: {
      director: 'director.ccari@icar.gov.in',
      email: 'director.ccari@icar.gov.in',
      address: 'ICAR-Central Coastal Agricultural Research Institute, Goa',
      website: 'www.ccari.res.in',
    },
  }),
  new Technology({
    title: 'Value-Added Food Products from Nutmeg Pericarp',
    description:
      'Nutmeg fruit has about 80-85 % of pericarp and trees of high yielding nutmeg varieties produce about 75-100 kg of fresh pericarp per tree, besides the economic yield of spice products, nutmeg seed and mace. The biomass of nutmeg pericarp is left behind in the garden for rotting after collecting the seeds and mace. Therefore, the pericarp is worth processing into a number of value–added food products.',
    statusOfTechnologyTransfer: 'The technology has been commercialized with a small scale agri entrepreneur through a non-exclusive licensing agreement.',
    salientFeatures: [
      'The nutmeg taffy is a product prepared by using nutmeg pericarp or rind.',
      'The product stores well at room temperature for 12 months with simple packing and without any synthetic preservatives.',
    ],
    benefit: [
      'The potential beneficiaries are cashew farmers, agri-entrepreneurs, self-help groups, small and medium scale food processing industries, agro-eco tourism projects.',
      'The product is commercially acceptable, and process is commercially feasible.',
      'Nutmeg pericarp taffy is one such potential technology to earn additional income from the same nutmeg tree besides income from yield of spice products.',
    ],
    training: 'Training imparted by ICAR – Central Coastal Agricultural Research Institute, Old Goa, Goa.',
    developer: 'A. R Desai, ICAR-CCARI, Goa',
    contactDetails: {
      director: 'director.ccari@icar.gov.in',
      email: 'director.ccari@icar.gov.in',
      address: 'ICAR-Central Coastal Agricultural Research Institute, Goa',
      website: 'www.ccari.res.in',
    },
  }),
  new Technology({
    title: 'Value-Added Products from Jackfruit Seeds',
    description:
      'About 1.74 million tonnes of jackfruits are produced annually in the country, from which more than 2.00 Lakh tonnes of seed are obtainable. Presently 99% of these seeds go as waste. Less than 1% may be utilized as a vegetable or animal feed. The seeds in the jackfruit constitutes about 10-15% of the whole weight and the seed powder has several beneficial properties due presence of several phytochemicals.',
    statusOfTechnologyTransfer: 'The technology ready for commercialization.',
    salientFeatures: [
      'The seed powder of jackfruit seeds besides having good antioxidant property was also found to have anti-microbial activity against pathogenic bacteria. The starch in jackfruit seed powder is reported to be RS type-2 resistant starch. As the jackfruit seed powder is bland without any taste, its consumption can be promoted only when it is converted into more palatable and enjoyable food product.',
      'A product was developed using chocolate as a wrap for enrobing jackfruit pulp & seed powder, where the product is very highly liked by all the consumers.',
      'The de-bittered jackfruit seed powder of different particle sizes were blended with mushroom powder and other additives and then enrobed with chocolate and shaped.',
      'Equipment Required: Solar or hot air driers, Powder mill or pulveriser, Sieves of different mesh sizes, steam jacketed kettle, Steam generator, Weighing Machine & Balances, Freezer, Chocolate melting machine, Nut Roaster, Chocolate enrober, Accessories, Packaging machines.',
      'Apart from this 3 HP Power supply, Potable water is needed. It requires a space of 1000 square feet covered area (owned or rented) and manpower: 5 persons. Capital Requirement is Rs. 34.50 Lakhs (Approx) Rs.25.00 Lakhs (Fixed Capital) + Rs.9.50 Lakhs (1 month working capital).',
    ],
    benefit: [
      'Specific training is required which will be provided to the licensee as part of Transfer of technology. The licencing fee is Rs.30,000/-.',
      'The licencing fee is Rs.30,000/-.',
    ],
    training: 'Specific training is required which will be provided to the licensee as part of Transfer of technology. The licencing fee is Rs.30,000/-.',
    developer: 'C. K. Narayana, ICAR-IIHR, Bangalore',
    contactDetails: {
      director: 'director.iihr@icar.gov.in',
      email: 'director.iihr@icar.gov.in',
      address: 'ICAR-Indian Institute of Horticultural Research, Bengaluru, Karnataka',
      website: 'www.iihr.res.in',
    },
  }),
  new Technology({
    title: 'Fortified Biscuits/ Cookies using Jackfruit Seed Powder and Mushroom Powder',
    description:
      'The seeds in the jackfruit constitute about 10-15% of the whole weight and the seed powder has 60.62% starch, 0.366% proteins, 2.05% crude fibre, 0.86 mg/100g phenols, 1.57 mg/100g flavonoids, 6.17 μg/g anthocyanins, 21.46 μg/g FRAP and 29.63 μg/g DPPH. The seed powder besides having good antioxidant property was also found to have anti-microbial activity against even pathogenic bacteria. The seed is a waste material usually thrown way or a little used as animal feed. To a limited extent it is also used as a vegetable. The starch in jackfruit seed powder is reported to be RS type-2 and can be used in development of specialties products like diabetic foods. Looking at its nutritional and therapeutic properties, it has enormous potential for using in food fortification.',
    statusOfTechnologyTransfer: 'The technology is already commercialized.',
    salientFeatures: [
      'In this technology a process was developed to make fortified biscuits / cookies using jackfruit seed powder and mushroom powder. Mushroom is high in selenium and jackfruit seed is rich in leucine, an essential amino acid. The bitter principle in jackfruit seed is removed and seed is made into powder. Further a process for making jackfruit seed & pulp powder and mushroom powder fortified biscuits / cookies was standardized.',
      'Equipment required are Solar or hot air driers, Powder mill or pulveriser, Sieves of different mesh sizes, Dough kneading machine, weighing machine & balances, baking equipment for making baked products, Steam jacketed kettle, Steam generator, packaging machines.',
      'Other Infrastructure required 3 HP Power supply, Potable water and space of 1000 square feet covered area (owned or rented); manpower: 5 persons. Capital Requirement: Rs. 19.50 Lakhs (Approx) (Rs.16.00 Lakhs (Fixed Capital) + Rs.3.50 Lakhs (1 month working capital).',
    ],
    benefit: [
      'Training is required on baking technology.',
      'The licencing fee is Rs.30,000/-.',
    ],
    training: 'Training is required on baking technology.',
    developer: 'C. K. Narayana, ICAR-IIHR, Bangalore',
    contactDetails: {
      director: 'director.iihr@icar.gov.in',
      email: 'director.iihr@icar.gov.in',
      address: 'ICAR-Indian Institute of Horticultural Research, Bengaluru, Karnataka',
      website: 'www.iihr.res.in',
    },
  }),
  new Technology({
    title: 'Pineapple Fiber Extraction for Textile and Industrial Applications',
    description:
      'India is one of the major producers of pineapple and its cultivation is spread across various States particularly North-eastern States. After harvest of the mature fruits, the leaves are thrown away as an agro-waste. These leaves contain 2.5- 3.5% good fibre which has a high demand in textile and industrial applications.',
    statusOfTechnologyTransfer: 'Ready for commercialisation.',
    salientFeatures: [
      'Extraction of fibre from the entire length of pineapple leaves.',
      'Eliminates the drudgery involved in the manual extraction process.',
      'The extractor runs through a 1 H.P. single phase electric motor.',
      'The output capacity of extractor is 30 kg green leaves per hour.',
    ],
    benefit: [
      'As a sustainable resource, it will play a pivotal role in the continuous supply of natural fibre to textile industries.',
      'Diversified value-added products can be developed from pineapple fibre alone or its blends with other natural fibres.',
      'Creation of rural employment with additional income for farmers.',
      'The availability of pineapple fibre will benefit the stake holders across the value chain viz. farmers; processing industries; exporters, consumers.',
    ],
    training: 'The training is available at ICAR-National Institute of Natural Fibre Engineering & Technology, Kolkata, West Bengal.',
    developer: 'Laxmikanta Nayak, ICAR- NINFET Kolkata',
    contactDetails: {
      director: 'director.ninfet@icar.gov.in',
      email: 'director.ninfet@icar.gov.in',
      address: 'ICAR-National Institute of Natural Fibre Engineering & Technology, Kolkata, West Bengal',
      website: 'www.nirjaft.res.in',
    },
  }),
  new Technology({
    title: 'Banana Pseudo-Stem Fibre Extraction for Textile and Non-Textile Applications',
    description:
      'There is a vast area under banana cultivation across India. After harvest of banana fruit, the pseudo stem is thrown away as an agro-waste. This pseudostem contains around 1% good quality natural fibre having high demand in textile and non-textile sector.',
    statusOfTechnologyTransfer: 'The technology is proven and transferred for field adoption.',
    salientFeatures: [
      'Extraction of fibre from the entire length of pseudo-stem.',
      'Human drudgery eliminated with the elimination of backward dragging action.',
      'The extractor runs through a 3 H.P. three phase electric motor.',
      'The output capacity of extractor is 150 kg pseudo-stem per hour.',
    ],
    benefit: [
      'As a sustainable resource, it will play a pivotal role in the continuous supply of natural fibre to textile industries.',
      'Diversified value-added products can be developed from banana pseudo-stem fibre alone or its blends with other natural fibres.',
      'Creation of rural employment with additional income for farmers.',
      'The availability of banana pseudo-stem fibre will benefit the stakeholders across the value chain viz. farmers; processing industries; exporters, consumers.',
    ],
    training: 'The training is available at ICAR-National Institute of Natural Fibre Engineering & Technology, Kolkata, West Bengal.',
    developer: 'Laxmikanta Nayak, ICAR- NINFET Kolkata',
    contactDetails: {
      director: 'director.ninfet@icar.gov.in',
      email: 'director.ninfet@icar.gov.in',
      address: 'ICAR-National Institute of Natural Fibre Engineering & Technology, Kolkata, West Bengal',
      website: 'www.nirjaft.res.in',
    },
  }),
  new Technology({
    title: 'Areca Sheath as Dry Fodder for Livestock in Coastal Karnataka',
    description:
      'In coastal region of Karnataka, the paddy straw availability as dry fodder for livestock has been low and is imported from neighboring regions at higher price. Areca plantation as a commercial crop is extensive in this area and the fallen areca sheath is used as fuel-wood and plate making. The residue after plate making is wasted and the potential availability of areca sheath in India is about 500 thousand tons per year. This residue was evaluated as an alternative dry fodder and found that the nutritive value of areca sheath is superior to paddy straw. Shredded areca sheath to pieces of 2 x 10 mm size when used as dry fodder replacing paddy straw along with concentrate mixture in the form of total mixed ration of dairy cattle, the average milk yield increased by 7-10% and milk fat by 0.2-0.3 units and cost of dry fodder reduced by 50%. The problem of dry fodder shortage in coastal region of Karnataka has been addressed with this innovation. In Andaman & Nicobar Island also two areca sheath processing units have been established by a farmer producer company and areca sheath is being used as dry fodder.',
    statusOfTechnologyTransfer: 'The technology is proven and transferred for field adoption. The Karnataka Milk Federation has adopted this technology and has established more than 70 areca sheath processing units in their milk unions.',
    salientFeatures: [
      'It is a technology for using areca sheath as dry fodder for livestock.',
      'It is a process of shredding the dried areca sheath and using along with concentrate mixture as total mixed ration.',
      'Shredded areca sheath can completely replace paddy straw.',
      'Nutritive value of areca sheath is better than paddy straw.',
      'Feeding of areca sheath improved milk yield and milk quality.',
    ],
    benefits: [
      'Cost of paddy straw : Rs 8 per kg',
      'Cost of areca sheath : Rs 3 per kg',
      'Cost of processing areca sheath : Rs 1 per kg',
      'Net saving : Rs 4 per kg of dry fodder',
    ],
    training: 'No specific training is required. Technology is simple to adopt.',
    developer: 'NKS Gowda, DT Pal, S Anandan and KT Sampath, ICAR-NIANP, Bangalore',
    contactDetails: {
      director: 'directornianp@gmail.com',
      email: 'directornianp@gmail.com',
      address: 'ICAR-National Institute of Animal Nutrition & Physiology, Bengaluru, Karnataka',
      website: 'www.nianp.res.in',
    },
  }),
  new Technology({
    title: 'Pineapple Fruit Residue Silage Technology for Animal Feed in India',
    description:
      'In India more than 1.3 million tons of non-edible pineapple fruit residue is available annually and is being wasted. The pineapple fruit residue (PFR) contains high moisture (65-70%) and total sugar (>50%) making it susceptible for fungal growth and spoilage within 2 days. This fruit residue has been converted into animal feeds by improving the keeping quality of PFR through silage technology. The PFR was chaffed into pieces of 1-2 inches and compacted in drums / bags at a moisture content of about 65% with 4:1 ratio (w/w) of pineapple leafy crown and fruit peels and kept under air-tight condition. With a period of 20 days, good quality PFR silage prepared and nutritive value was better than maize green fodder. Feeding of PFR silage based total mixed ration to sheep did not show any adverse effects and supported desired growth. This technology will help in mitigating the green fodder shortage in pineapple cultivation.',
    statusOfTechnologyTransfer: 'This technology has been licensed to M/s. Fresh Fruits Processing Pvt. Ltd. to prepare silage from pineapple fruit residue in drums and bags and market as fodder for livestock.',
    salientFeatures: [
      'Technology for preparing silage from pineapple fruit residue.',
      'It is a process of using pineapple fruit residue silage as fodder along with concentrate mixture in the form of total mixed ration.',
      'Pineapple fruit residue silage can be used as green fodder.',
      'Nutritive value of pineapple fruit residue silage is better than maize green fodder.',
      'Feeding pineapple fruit residue silage improved milk yield (about 20%) and milk fat content (by 0.6units).',
    ],
    benefits: [
      'Cost: Benefit',
      'Cost of pineapple fruit residue : Rs 1 per kg',
      'Cost of maize green fodder : Rs 3 per kg',
      'Cost of silage making from pineapple fruit residue : Rs 1 per kg',
      'Net saving : Rs 1 per kg by feeding pineapple fruit residue silage replacing maize green fodder',
    ],
    training: 'Training is required for preparing silage from pineapple fruit residue and preparation of total mixed ration. Training available at ICAR-NIANP, Bangalore.',
    developer: 'NKS Gowda, DT Pal, S Anandan and CS Prasad, ICAR-NIANP, Bangalore',
    contactDetails: {
      director: 'directornianp@gmail.com',
      email: 'directornianp@gmail.com',
      address: 'ICAR-National Institute of Animal Nutrition & Physiology, Bengaluru, Karnataka',
      website: 'www.nianp.res.in',
    },
  }),
  new Technology({
    title: 'Utilization of Vegetable Wastes as Pig Feed through Silage Technology in India',
    description:
      'Vegetable wastes are produced in large quantities across India especially in market areas and causes environmental pollution from the production of obnoxious odour. These materials can be well utilized as pig feed after processing such as making silage. This will not only reduce the environmental pollution but also reduced the cost of production in pig. Vegetable waste are rich in energy and many micronutrients.',
    statusOfTechnologyTransfer: 'The technology is proven and transferred for field adoption.',
    salientFeatures: [
      'The process includes collection of vegetable waste from market, washing the waste followed by sun drying for 3-4 hours, cutting into small pieces, mixing the materials with molasses or jaggery @ 3-4 % and salt 0.25 %, it is then mixed properly and packed in silage bag or thick polythene in airtight condition and kept for 21 days. Then materials become ready for feeding. After opening the silage bag, the materials should be finished within 2-3 days.',
      'The production requirement of pig can be met by 3 kg vegetable waste silage with 0.5-1.0 kg rice polish/rice bran plus 100 g oil cakes/fish meal along with 2 tea spoonful mineral mixture per day per adult pig. The advantage of this technology is that the materials can be kept for one year also if bags are not open.',
    ],
    benefits: [
      'It reduces environmental pollution.',
      'Increase profit of the farmers by reducing the feed cost.',
      'The cost of production was reduced by Rs.13.77 and Rs. 10.52 per kg gain at 10 % and 15 % level of inclusion in grower ration of pig.',
    ],
    developer: 'Keshab Barman, Swaraj Rajkhowa, R. Thomas and S.R. Pegu, ICAR-NRCP, Assam',
    contactDetails: {
      director: 'nrconpig@rediffmail.com',
      email: 'nrconpig@rediffmail.com',
      address: 'ICAR-National Research Centre on Pig, Rani, Guwahati Assam',
      website: 'www.nrcp.in',
    },
  }),
  new Technology({
    title: 'Utilization of Pruned Wood in Pomegranate Cultivation for Propagation',
    description:
      'Pruning is a regular practice in pomegranate. Generally, the pruned woods are thrown away. Pruning of one hectare of fully-grown pomegranate orchard, planted at a density of 740 plants/ha. produces hard/semi-hardwood stem cuttings suitable for propagation of about 10000-12000 healthy planting material.',
    salientFeatures: [
      'Pruned wood of disease free plants under stress or semi-dormant stage or just before actively growing period can be used for making cuttings. Note cuttings from actively growing plants or lateral wood which flowers profusely do not give satisfactory cutting success.',
      'The hard/semi hardwood stem of about one year old branch and 8.0-12.0 mm diameter is cut into stem cuttings of 20-25 cm length with 4 nodes. The cuttings are arranged into bundles of 50-100 cuttings and treated for 15 minutes with luke warm solution (45-50°C) of 0.1% Carbendazim (50 % WP) + 0.05% 2-Bromo-2-nitro-1,3-propanediol along with any surfactant, followed by surface sterilization with 2.0% solution of NaOCl (4 % w/v) for 10 minutes. The basal 2-3 cm portion of cutting is then given 2000 ppm IBA treatment for about 1 minute before planting on microbe fortified cocopeat medium in nursery bags under shade.',
      'The treated hardwood cuttings from waste wood can also be used for in situ direct field planting (if climate is not too harsh). Four cuttings are planted/pit using half kg plant beneficial microbe fortified cocopeat, each pit should be supplied with two drippers for optimum moisture maintenance and covered with old shade net after planting of cuttings.',
    ],
    benefits: [
      'Technology of sanitation protocol for hardwood pomegranate cuttings has already been commercialized.',
      'Pruned wood of healthy plants which is generally thrown away can generate resource worth of Rs. 2,00,000/- per hectare.',
    ],
    training: 'Training is imparted by ICAR- National Research Centre on Pomegranate, Solapur.',
    developer: 'N.V. Singh, ICAR-NRC on Pomegranate, Solapur',
    contactDetails: {
      director: 'nrcpomegranate@gmail.com',
      email: 'nrcpomegranate@gmail.com',
      address: 'ICAR-National Research Centre on Pomegranate, Solapur, Maharashtra',
      website: 'nrcpomegranate.icar.gov.in',
    },
  })         
  ];

 

technology.deleteMany({})  // Delete all existing records
.then(() => {
  console.log('All existing records deleted.');
  return technology.insertMany(newRecord);  // Insert new records
})
.then(records => {
  console.log('New records saved:', records);
  mongoose.connection.close();
})
.catch(err => {
  console.error('Error:', err);
  mongoose.connection.close();
});