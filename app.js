// ==========================================================================
// Akili Mali - Application Logic
// Translation, Form Validation, Modals, Interactive Elements, and Auth
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTranslations();
  initNavigation();
  initTabs();
  initModal();
  initForms();
  initMpesaSimulator();
  initAuth();
});

// ==========================================================================
// Translation Module (English / Swahili)
// ==========================================================================

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_help: "Get Help Now",
    nav_programs: "Programs",
    nav_stories: "Stories",
    nav_involved: "Get Involved",
    nav_contact: "Contact",
    nav_donate: "Donate",
    floating_crisis_btn: "Get Help Now",

    // Banner & Hero
    emergency_banner_text: "In distress? Need to talk to someone right now?",
    emergency_banner_link: "View 24/7 Verified Helplines in Kenya",
    hero_title: "Your mind is your greatest wealth. Let's nurture it together.",
    hero_desc: "We are Akili Mali. We're building a supportive, stigma-free community for young people and university students in Kenya to connect, seek help, and thrive mentally.",
    hero_cta_talk: "Talk to Someone Now",
    hero_cta_learn: "Learn About Our Mission",

    // About Us
    about_tag: "WHO WE ARE",
    about_title: "Bridging the Mental Health Gap in Kenya",
    about_subtitle: "Our Origin & Vision",
    about_text_1: "Founded by youth advocates, Akili Mali arose from a crucial realization: young Kenyans, especially those navigating the immense pressures of universities and early adult transitions, face unique mental health challenges but often lack safe spaces to seek help. Stigma, clinical intimidation, and financial barriers keep many in silence.",
    about_text_2: "Our name, Akili Mali, translates to 'Mental Wealth' in Swahili. We believe mental well-being is the ultimate wealth. We exist not as a clinical center, but as a warm, community-driven bridge connecting young people to peer-support networks, educational resources, and verified professional crisis response services.",
    about_mission_label: "Our Mission",
    about_mission_text: "To make youth mental health support accessible, destigmatized, and locally driven through peer networks and community education.",
    about_vision_label: "Our Vision",
    about_vision_text: "A Kenya where every young person possesses the support, knowledge, and resources to build their mental wealth without fear of judgment.",

    // Statistics
    stats_title: "Why This Matters: The Statistics",
    stats_intro: "The mental health landscape for Kenyan youth requires community action. Here is the reality we are addressing:",
    stat_1: "1 in 4 Kenyan youth experience a mental health disorder, with depression and anxiety most common.",
    stat_2: "Nearly 50% of young adults in a 2024 Mombasa study reported moderate-to-severe depression symptoms, with girls disproportionately affected.",
    stat_3: "6 in 10 youth in informal settlements like Kibera report persistent feelings of depression, anxiety, or panic attacks.",
    stat_4: "Only 0.19 psychiatrists per 100,000 people in Kenya (WHO), highlighting a severe formal access gap.",
    stat_5: "Globally, suicide is the fourth leading cause of death among 15–29-year-olds (WHO). Every statistic represents a student, friend, and youth who deserves support.",

    // Crisis Section
    crisis_badge: "SUPPORT RESOURCES",
    crisis_title: "Get Help Now: Verified Kenyan Helplines",
    crisis_desc: "If you or someone you know is in distress or experiencing a mental health emergency, please reach out to these free, confidential resources. Akili Mali is a community connector, but these trained professionals are ready to talk to you right now.",
    crisis_befrienders_time: "Mon – Fri, 9am – 5pm",
    crisis_befrienders_desc: "Providing free, confidential emotional support via calls, SMS, and WhatsApp.",
    crisis_redcross_time: "24/7 Support",
    crisis_redcross_desc: "Toll-free mental health emergency and psychological first aid support (Safaricom).",
    crisis_lvct_time: "24/7 Support",
    crisis_lvct_desc: "Confidential toll-free youth helpline offering mental health and counseling support (Safaricom).",
    crisis_nacada_time: "24/7 Support",
    crisis_nacada_desc: "Toll-free national hotline providing support for drug and alcohol-related distress.",
    crisis_emkf_time: "24/7 Support",
    crisis_emkf_desc: "Free nationwide suicide prevention line staffed by trained mental health professionals.",
    crisis_knh_time: "Tuesdays, 8am – 4pm",
    crisis_knh_desc: "Free walk-in psychotherapy and psychiatric services for youth aged 25 and under.",
    crisis_knh_walkin: "Walk-in Clinic (Kenyatta National Hospital)",

    // Programs
    programs_tag: "WHAT WE DO",
    programs_title: "Our Programs & Initiatives",
    prog_1_title: "Peer Support Circles",
    prog_1_desc: "Facilitated, informal sharing groups held weekly in universities and neighborhood centers. A safe, non-judgmental space to share struggles and build collective resilience.",
    prog_2_title: "Campus & School Outreach",
    prog_2_desc: "Educational workshops in high schools and colleges, targeting exam stress, mental health myths, anxiety triggers, and pathways to seek guidance early.",
    prog_3_title: "Mental Health First Aid",
    prog_3_desc: "Training university student leaders, class representatives, and community volunteers to recognize early warning signs of distress and safely connect peers to professional crisis response.",
    prog_4_title: "Awareness Campaigns",
    prog_4_desc: "Digital advocacy and local art events (poetry, music, storytelling) to bust deep-seated mental health myths and normalize therapy and peer support within Kenya.",

    // Stories & Tabs
    stories_tag: "VOICES & EDUCATION",
    stories_title: "Stories of Hope & Mental Health Truths",
    tab_testimonials: "Anonymized Testimonials",
    tab_mythbusting: "Myth-Busting Kenya",
    test_1_text: "\"In my third year of university, the exam anxiety and family expectations became overwhelming. I felt completely isolated. Joining an Akili Mali peer circle showed me I wasn't alone. Speaking up saved my life.\"",
    test_1_author: "Anonymous, 22",
    test_1_loc: "Kenyatta University Student",
    test_2_text: "\"As a young man in Kibera, I was taught that showing weakness is not allowed. When depression hit, I hid it. Finding Akili Mali's community allowed me to understand that seeking mental health support is actually a form of strength.\"",
    test_2_author: "Anonymous, 24",
    test_2_loc: "Nairobi Community Member",
    myth_label: "MYTH",
    fact_label: "FACT",
    myth_1_title: "\"Mental health struggles are a sign of weak faith or spiritual failure.\"",
    myth_1_fact: "Mental illnesses are legitimate health conditions, influenced by brain chemistry, genetics, trauma, and environments. Seeking support is a wise and brave medical action.",
    myth_2_title: "\"Only 'crazy' people go to therapy. Strong Kenyans just endure.\"",
    myth_2_fact: "Therapy is for anyone navigating stress, grief, anxiety, or seeking personal growth. Confronting challenges with a counselor is a testament to true inner resilience.",

    // Get Involved
    involved_tag: "SUPPORT US",
    involved_title: "Help Us Grow the Movement",
    involved_desc: "Akili Mali runs on the passion of volunteers, community support, and partner organizations. Whether you want to facilitate peer support, sponsor training sessions, or partner on student events, we need your voice.",
    involved_donation_title: "Support Our Peer Circle Kits",
    involved_donation_desc: "A small contribution helps us print training manuals, secure meeting spaces, and provide refreshments for university support circles. Supporting mental health is low-friction and direct.",
    involved_donation_btn: "Support via M-Pesa or Card",
    involved_form_title: "Join the Movement",
    form_name: "Full Name",
    form_name_placeholder: "Enter your full name",
    form_email: "Email Address",
    form_email_placeholder: "yourname@gmail.com",
    form_phone: "Phone Number",
    form_phone_placeholder: "e.g. 0712345678",
    form_interest: "Area of Interest",
    form_interest_default: "Select an area...",
    form_interest_vol: "Volunteer Work",
    form_interest_don: "Donation / Sponsorship",
    form_interest_part: "Partnership",
    form_interest_inq: "General Inquiry",
    form_message: "How would you like to help?",
    form_message_placeholder: "Tell us a little bit about yourself and why you'd like to join...",
    form_submit: "Submit Application",

    // Contact
    contact_title: "Direct Contact & Inquiries",
    contact_desc: "Have any questions about our work, schedules, or events? Get in touch with our team representative directly or send a message.",
    contact_name_label: "Representative",
    contact_email_label: "Email Address",
    contact_phone_label: "Phone Line",
    contact_safe_note: "All communication is held in strict confidentiality. We maintain a non-judgmental, warm environment.",
    contact_form_title: "Send a Quick Message",
    contact_form_msg_label: "Your Message",
    contact_form_msg_placeholder: "Write your message here...",
    contact_form_submit: "Send Message",

    // Footer
    footer_desc: "Nurturing mental wealth, peer connections, and health education for Kenyan youth.",
    footer_links_title: "Quick Nav",
    footer_legal_title: "Important Note",
    footer_legal_desc: "Akili Mali is a registered community advocate network in Kenya. We are not a medical agency, clinic, or direct diagnostic hotline. If you are experiencing a severe emergency, please dial emergency lines or visit the nearest county hospital.",
    footer_copy: "All rights reserved. Made for Kenyan Youth.",

    // Donation Modal
    donate_modal_title: "Support Akili Mali",
    donate_modal_desc: "Help us keep peer support spaces running. Choose your donation method below.",
    donate_tab_card: "Card / International",
    mpesa_instructions: "You can send donations directly via Lipa Na M-Pesa Buy Goods & Services:",
    mpesa_till_label: "Till Number",
    mpesa_store_label: "Store Name",
    mpesa_sim_title: "Simulate M-Pesa STK Push",
    mpesa_amount_label: "Amount (KES)",
    mpesa_sim_btn: "Send STK Push Request",
    card_num: "Card Number",
    card_submit: "Donate with Card",

    // Validation & Messages
    err_required: "This field is required.",
    err_email_invalid: "Please enter a valid email address.",
    err_phone_invalid: "Enter a valid Kenyan number (e.g. 0712345678 or +254712345678).",
    err_name_short: "Name must be at least 3 letters.",
    err_msg_short: "Message must be at least 10 characters.",
    err_amount_low: "Minimum donation amount is KES 10.",
    msg_form_success: "Thank you! Your submission has been received successfully.",
    msg_mpesa_sim_start: "Initiating payment push to your mobile device...",
    msg_mpesa_sim_success: "Transaction mock-completed successfully. Thank you for your support!",
    msg_card_success: "Card donation mocked successfully. Thank you for your support!"
  },
  sw: {
    // Navigation
    nav_home: "Mwanzo",
    nav_about: "Kuhusu Sisi",
    nav_help: "Msaada Sasa",
    nav_programs: "Miradi Yetu",
    nav_stories: "Hadithi Zetu",
    nav_involved: "Jiunge Nasi",
    nav_contact: "Mawasiliano",
    nav_donate: "Changia",
    floating_crisis_btn: "Pata Msaada",

    // Banner & Hero
    emergency_banner_text: "Uko kwenye dhiki? Unahitaji kuongea na mtu sasa hivi?",
    emergency_banner_link: "Tazama Nambari za Dharura Zilizohakikiwa Kenya",
    hero_title: "Akili yako ni utajiri wako mkubwa. Hebu tuilee pamoja.",
    hero_desc: "Sisi ni Akili Mali. Tunajenga jamii inayounga mkono, isiyo na unyanyapaa kwa vijana na wanafunzi wa vyuo vikuu nchini Kenya ili kuungana, kutafuta msaada, na kustawi kiakili.",
    hero_cta_talk: "Ongea na Mtu Sasa",
    hero_cta_learn: "Jifunze Kuhusu Lengo Letu",

    // About Us
    about_tag: "SISI NI NANI",
    about_title: "Kuziba Pengo la Afya ya Akili nchini Kenya",
    about_subtitle: "Asili yetu & Maono",
    about_text_1: "Ilianzishwa na watetezi wa vijana, Akili Mali ilitokana na utambuzi muhimu: vijana Wakenya, haswa wale wanaokabiliana na shinikizo kubwa la vyuo vikuu na mabadiliko ya utu uzima, wanakabiliwa na changamoto za kipekee za afya ya akili lakini mara nyingi hukosa nafasi salama za kutafuta msaada. Unyanyapaa, hofu ya kliniki, na vizuizi vya kifedha huwafanya wengi kukaa kimya.",
    about_text_2: "Jina letu, Akili Mali, linamaanisha utajiri wa kiakili. Tunaamini ustawi wa akili ndio utajiri mkuu. Hatupo kama kituo cha matibabu ya kliniki, lakini kama daraja linaloendeshwa na jamii inayowaunganisha vijana na mitandao ya usaidizi wa rika, rasilimali za elimu, na huduma zilizohakikiwa za dharura za kitaalamu.",
    about_mission_label: "Lengo Letu",
    about_mission_text: "Kufanya usaidizi wa afya ya akili kwa vijana upatikane, uondolewe unyanyapaa, na uendeshwe kienyeji kupitia mitandao ya rika na elimu ya jamii.",
    about_vision_label: "Maono Yetu",
    about_vision_text: "Kenya ambapo kila kijana ana usaidizi, maarifa, na rasilimali za kujenga utajiri wao wa akili bila hofu ya kuhukumiwa.",

    // Statistics
    stats_title: "Kwa Nini Hii Ni Muhimu: Takwimu",
    stats_intro: "Hali ya afya ya akili kwa vijana wa Kenya inahitaji hatua za kijamii. Hapa kuna ukweli tunaokabiliana nao:",
    stat_1: "Kijana 1 kati ya 4 wa Kenya anakabiliwa na ugonjwa wa afya ya akili, huku msongo wa mawazo na wasiwasi vikiwa vimeenea zaidi.",
    stat_2: "Karibu 50% ya vijana katika utafiti wa Mombasa wa 2024 waliripoti dalili za wastani hadi kali za msongo wa mawazo, wasichana wakiathiriwa zaidi.",
    stat_3: "Vijana 6 kati ya 10 katika makazi yasiyo rasmi kama Kibera wanaripoti hisia za kudumu za unyogovu, wasiwasi, au mashambulizi ya hofu.",
    stat_4: "Kuna madaktari wa magonjwa ya akili 0.19 tu kwa kila watu 100,000 nchini Kenya (WHO), ikionyesha pengo kubwa la upatikanaji wa huduma rasmi.",
    stat_5: "Ulimwenguni kote, kujiua ni sababu ya nne ya kifo kati ya vijana wa umri wa miaka 15-29 (WHO). Kila takwimu inawakilisha mwanafunzi, rafiki, na kijana anayestahili usaidizi.",

    // Crisis Section
    crisis_badge: "RASILIMALI ZA MSAADA",
    crisis_title: "Pata Msaada Sasa: Nambari Zilizothibitishwa",
    crisis_desc: "Ikiwa wewe au mtu unayemjua yuko katika dhiki au anapata dharura ya afya ya akili, tafadhali wasiliana na huduma hizi za siri na zisizolipishwa. Akili Mali ni kiunganishi cha jamii, lakini wataalamu hawa waliofunzwa wako tayari kuzungumza nawe sasa hivi.",
    crisis_befrienders_time: "Jumatatu – Ijumaa, Saa 3 asubuhi – Saa 11 jioni",
    crisis_befrienders_desc: "Kutoa usaidizi wa kihisia wa siri bila malipo kupitia simu, SMS, na WhatsApp.",
    crisis_redcross_time: "Masaa 24/7",
    crisis_redcross_desc: "Nambari ya dharura ya afya ya akili na huduma ya kwanza ya kisaikolojia bila malipo (Safaricom).",
    crisis_lvct_time: "Masaa 24/7",
    crisis_lvct_desc: "Nambari ya simu ya siri ya vijana bila malipo inayotoa usaidizi wa afya ya akili na ushauri nasaha (Safaricom).",
    crisis_nacada_time: "Masaa 24/7",
    crisis_nacada_desc: "Nambari ya dharura ya kitaifa bila malipo inayotoa usaidizi kwa dhiki inayotokana na dawa za kulevya au pombe.",
    crisis_emkf_time: "Masaa 24/7",
    crisis_emkf_desc: "Njia ya kitaifa ya kuzuia kujiua bila malipo inayohudumiwa na wataalamu waliofunzwa wa afya ya akili.",
    crisis_knh_time: "Jumanne, Saa 2 asuhi – Saa 10 jioni",
    crisis_knh_desc: "Huduma za bure za matibabu ya kisaikolojia na kiakili kwa vijana wenye umri wa miaka 25 na chini.",
    crisis_knh_walkin: "Kliniki ya Kutembea Ndani (Hospitali ya Kitaifa ya Kenyatta)",

    // Programs
    programs_tag: "TUNACHOFANYA",
    programs_title: "Miradi na Mipango Yetu",
    prog_1_title: "Vikundi vya Rika",
    prog_1_desc: "Vikundi vinavyowezeshwa, vya kushiriki rasmi vinavyofanyika kila wiki katika vyuo vikuu na vituo vya vitongoji. Nafasi salama, isiyo na hukumu ya kushiriki mapambano na kujenga ustahimilivu wa pamoja.",
    prog_2_title: "Uhamasishaji Shuleni & Vyoni",
    prog_2_desc: "Warsha za kielimu katika shule za upili na vyuo vikuu, zikilenga msongo wa mtihani, hadithi za uongo za afya ya akili, vichocheo vya wasiwasi, na njia za kutafuta mwongozo mapema.",
    prog_3_title: "Huduma ya Kwanza ya Akili",
    prog_3_desc: "Kutoa mafunzo kwa viongozi wa wanafunzi wa chuo kikuu, wawakilishi wa madarasa, na wajitolea wa jamii kutambua ishara za mapema za dhiki na kuwaunganisha wenzao salama na wataalamu.",
    prog_4_title: "Kampeni za Uhamasishaji",
    prog_4_desc: "Uanaharakati wa kidijitali na hafla za sanaa za kienyeji (mashairi, muziki, usimulizi wa hadithi) ili kuondoa dhana potofu za afya ya akili na kuhalalisha tiba na usaidizi wa rika nchini Kenya.",

    // Stories & Tabs
    stories_tag: "SAUTI & ELIMU",
    stories_title: "Hadithi za Matumaini na Ukweli wa Akili",
    tab_testimonials: "Ushuhuda Usio na Majina",
    tab_mythbusting: "Hadithi za Uongo Kenya",
    test_1_text: "\"Katika mwaka wangu wa tatu wa chuo kikuu, wasiwasi wa mitihani na matarajio ya kifamilia yalikuwa makubwa sana. Nilijihisi mpweke kabisa. Kujiunga na kikundi cha rika cha Akili Mali kilinionyesha sikuwa peke yangu. Kuzungumza kuliokoa maisha yangu.\"",
    test_1_author: "Asiyejulikana, 22",
    test_1_loc: "Mwanafunzi wa Chuo Kikuu cha Kenyatta",
    test_2_text: "\"Kama kijana hapa Kibera, nilifundishwa kwamba kuonyesha udhaifu hauruhusiwi. Wakati msongo wa mawazo uliponipata, nilificha. Kupata jamii ya Akili Mali kulinisaidia kuelewa kuwa kutafuta msaada wa afya ya akili ni nguvu kubwa.\"",
    test_2_author: "Asiyejulikana, 24",
    test_2_loc: "Mwanachama wa Jamii ya Nairobi",
    myth_label: "UONGO",
    fact_label: "UKWELI",
    myth_1_title: "\"Mapambano ya afya ya akili ni ishara ya imani dhaifu au kushindwa kiroho.\"",
    myth_1_fact: "Magonjwa ya akili ni hali halisi ya kiafya, inayoathiriwa na kemia ya ubongo, vinasaba, majeraha ya kisaikolojia, na mazingira. Kutafuta msaada ni hatua ya busara na ya kijasiri ya matibabu.",
    myth_2_title: "\"Watu 'wazimu' tu ndio huenda kwa mtaalamu wa ushauri nasaha. Wakenya wenye nguvu huvumilia tu.\"",
    myth_2_fact: "Tiba ya kisaikolojia ni ya mtu yeyote anayekabiliwa na msongo wa mawazo, huzuni, wasiwasi, au anayetafuta ukuaji wa kibinafsi. Kukabiliana na changamoto na mshauri ni dhihirisho la ustahimilivu wa kweli wa ndani.",

    // Get Involved
    involved_tag: "TUUNGE MKONO",
    involved_title: "Tusaidie Kukuza Vuguvugu Hili",
    involved_desc: "Akili Mali inaendeshwa na shauku ya wajitolea, usaidizi wa jamii, na mashirika washirika. Iwe unataka kuwezesha usaidizi wa rika, kudhamini vikao vya mafunzo, au kushirikiana kwenye hafla za wanafunzi, tunahitaji sauti yako.",
    involved_donation_title: "Saidia Vifaa Vyetu vya Vikundi vya Rika",
    involved_donation_desc: "Mchango mdogo hutusaidia kuchapisha miongozo ya mafunzo, kupata nafasi za mikutano, na kutoa vinywaji kwa vikundi vya usaidizi vya chuo kikuu. Kusaidia afya ya akili ni rahisi na ya moja kwa moja.",
    involved_donation_btn: "Changia kupitia M-Pesa au Kadi",
    involved_form_title: "Jiunge na Vuguvugu",
    form_name: "Majina Kamili",
    form_name_placeholder: "Weka majina yako kamili",
    form_email: "Barua Pepe",
    form_email_placeholder: "jinalako@gmail.com",
    form_phone: "Nambari ya Simu",
    form_phone_placeholder: "mfano 0712345678",
    form_interest: "Eneo la Nia",
    form_interest_default: "Chagua eneo la nia...",
    form_interest_vol: "Kazi ya Kujitolea",
    form_interest_don: "Ufadhili / Mchango",
    form_interest_part: "Ushirikiano",
    form_interest_inq: "Maswali ya Jumla",
    form_message: "Je, ungependa kusaidia vipi?",
    form_message_placeholder: "Tueleze kidogo kukuhusu na kwa nini ungependa kujiunga nasi...",
    form_submit: "Tuma Maombi",

    // Contact
    contact_title: "Mawasiliano ya Moja kwa Moja",
    contact_desc: "Je, una maswali yoyote kuhusu kazi yetu, ratiba, au matukio yetu? Wasiliana na mwakilishi wa timu yetu moja kwa moja au utume ujumbe.",
    contact_name_label: "Mwakilishi",
    contact_email_label: "Barua Pepe",
    contact_phone_label: "Nambari ya Simu",
    contact_safe_note: "Mawasiliano yote huwekwa kwa siri kabisa. Tunadumisha mazingira yasiyo na hukumu na yenye joto.",
    contact_form_title: "Tuma Ujumbe wa Haraka",
    contact_form_msg_label: "Ujumbe Wako",
    contact_form_msg_placeholder: "Andika ujumbe wako hapa...",
    contact_form_submit: "Tuma Ujumbe",

    // Footer
    footer_desc: "Kukuza utajiri wa akili, unganisho la rika, na elimu ya afya kwa vijana wa Kenya.",
    footer_links_title: "Njia za Haraka",
    footer_legal_title: "Ujumbe Muhimu",
    footer_legal_desc: "Akili Mali ni mtandao wa watetezi wa jamii uliosajiliwa nchini Kenya. Sisi si wakala wa matibabu, kliniki, au huduma ya moja kwa moja ya matibabu. Ikiwa unapitia dharura kali, tafadhali piga simu nambari za dharura au tembelea hospitali ya rufaa iliyo karibu.",
    footer_copy: "Haki zote zimehifadhiwa. Imetengenezwa kwa ajili ya Vijana Wakenya.",

    // Donation Modal
    donate_modal_title: "Saidia Akili Mali",
    donate_modal_desc: "Tusaidie kuweka vikundi vya rika vikiendelea. Chagua njia yako ya mchango hapa chini.",
    donate_tab_card: "Kadi / Kimataifa",
    mpesa_instructions: "Unaweza kutuma mchango wako moja kwa moja kupitia Lipa Na M-Pesa Buy Goods & Services:",
    mpesa_till_label: "Nambari ya Till",
    mpesa_store_label: "Jina la Duka",
    mpesa_sim_title: "Simulate Ombi la M-Pesa STK Push",
    mpesa_amount_label: "Kiasi (KES)",
    mpesa_sim_btn: "Tuma Ombi la STK Push",
    card_num: "Nambari ya Kadi",
    card_submit: "Changia na Kadi",

    // Validation & Messages
    err_required: "Sehemu hii inahitajika.",
    err_email_invalid: "Tafadhali weka barua pepe halisi.",
    err_phone_invalid: "Weka nambari sahihi ya Kenya (mfano 0712345678 au +254712345678).",
    err_name_short: "Jina lazima liwe na herufi zisizopungua 3.",
    err_msg_short: "Ujumbe lazima uwe na herufi zisizopungua 10.",
    err_amount_low: "Kiasi cha chini kabisa cha mchango ni KES 10.",
    msg_form_success: "Asante! Ombi lako limepokelewa kikamilifu.",
    msg_mpesa_sim_start: "Inatuma ombi la malipo kwa simu yako...",
    msg_mpesa_sim_success: "Mchango kupitia M-Pesa umekamilika. Asante sana kwa usaidizi wako!",
    msg_card_success: "Mchango kupitia Kadi umekamilika. Asante sana kwa usaidizi wako!"
  }
};

let currentLanguage = 'en';

function initTranslations() {
  const langBtn = document.getElementById('lang-switch');
  if (!langBtn) return;

  // Retrieve saved language preferences
  const savedLang = localStorage.getItem('akili_mali_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'sw')) {
    currentLanguage = savedLang;
    updateDOMTranslations();
  }

  langBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'sw' : 'en';
    localStorage.setItem('akili_mali_lang', currentLanguage);
    updateDOMTranslations();
  });
}

function updateDOMTranslations() {
  const langBtn = document.getElementById('lang-switch');
  const dict = translations[currentLanguage];

  // Update toggle button presentation
  if (langBtn) {
    langBtn.setAttribute('data-lang', currentLanguage);
    langBtn.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Swahili' : 'Badilisha kuwa Kiingereza');
    const enLabel = langBtn.querySelector('.lang-label:first-child');
    const swLabel = langBtn.querySelector('.lang-label:last-child');
    if (currentLanguage === 'en') {
      enLabel.classList.remove('text-muted');
      swLabel.classList.add('text-muted');
    } else {
      enLabel.classList.add('text-muted');
      swLabel.classList.remove('text-muted');
    }
  }

  // Set html document language
  document.documentElement.lang = currentLanguage;

  // Update text values
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.children.length === 0) {
        el.textContent = dict[key];
      } else {
        const bannerLink = el.querySelector('.banner-link');

        if (key === 'emergency_banner_text' && bannerLink) {
          const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
          if (textNode) textNode.textContent = dict[key] + " ";
        } else {
          el.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
              child.textContent = dict[key];
            }
          });
        }
      }
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

// ==========================================================================
// Mobile Navigation Controls
// ==========================================================================

function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('menu-active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('menu-active');
    });
  });
}

// ==========================================================================
// Tab Navigation (Stories vs Myth Busting)
// ==========================================================================

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('hidden', 'true');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.removeAttribute('hidden');
      }
    });
  });
}

// ==========================================================================
// Toast Notification Engine
// ==========================================================================

function showToast(messageKey) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const dict = translations[currentLanguage];
  const msg = dict[messageKey] || messageKey;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');

  toast.innerHTML = `
    <span>${msg}</span>
    <button class="toast-close" aria-label="Close message">&times;</button>
  `;

  container.appendChild(toast);

  toast.querySelector('.toast-close').addEventListener('click', () => {
    removeToast(toast);
  });

  setTimeout(() => {
    removeToast(toast);
  }, 4500);
}

function removeToast(toast) {
  if (!toast.parentNode) return;
  toast.classList.add('toast-hiding');
  toast.addEventListener('animationend', () => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  });
}

// ==========================================================================
// Forms Handling & Localized Client Validation (now submits to Formspree)
// ==========================================================================

function initForms() {
  const signupForm = document.getElementById('signup-form');
  const contactForm = document.getElementById('contact-form');

  const submitToFormspree = (form) => {
    return fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
  };

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(signupForm)) {
        submitToFormspree(signupForm)
          .then(res => {
            if (res.ok) {
              showToast('msg_form_success');
              signupForm.reset();
            } else {
              showToast('err_required');
            }
          })
          .catch(() => showToast('err_required'));
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        submitToFormspree(contactForm)
          .then(res => {
            if (res.ok) {
              showToast('msg_form_success');
              contactForm.reset();
            } else {
              showToast('err_required');
            }
          })
          .catch(() => showToast('err_required'));
      }
    });
  }
}

function validateForm(form) {
  let isValid = true;
  const dict = translations[currentLanguage];

  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

  inputs.forEach(input => {
    const parent = input.closest('.form-group');
    if (!parent) return;

    const errorContainer = parent.querySelector('.error-msg');
    let errorText = '';

    parent.classList.remove('has-error');
    if (errorContainer) errorContainer.textContent = '';

    const val = input.value.trim();

    if (!val) {
      errorText = dict.err_required;
      isValid = false;
    }
    else if (input.type === 'email' && !validateEmail(val)) {
      errorText = dict.err_email_invalid;
      isValid = false;
    }
    else if (input.type === 'tel' && !validateKenyanPhone(val)) {
      errorText = dict.err_phone_invalid;
      isValid = false;
    }
    else if (input.name === 'name' && val.length < 3) {
      errorText = dict.err_name_short;
      isValid = false;
    }
    else if (input.name === 'message' && val.length < 10) {
      errorText = dict.err_msg_short;
      isValid = false;
    }

    if (errorText) {
      parent.classList.add('has-error');
      if (errorContainer) {
        errorContainer.textContent = errorText;
      }
    }
  });

  return isValid;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateKenyanPhone(phone) {
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  const re = /^(?:\+254|254|0)?(7|1)\d{8}$/;
  return re.test(cleanPhone);
}

// ==========================================================================
// Donation Modal Overlay Flow
// ==========================================================================

function initModal() {
  const modal = document.getElementById('donation-modal');
  const triggers = document.querySelectorAll('.donate-trigger');
  const closeBtn = document.getElementById('modal-close-btn');
  const payTabs = document.querySelectorAll('.pay-tab-btn');
  const payPanels = document.querySelectorAll('.payment-panel');

  if (!modal || !closeBtn) return;

  triggers.forEach(trig => {
    trig.addEventListener('click', () => {
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  const closeModal = () => {
    modal.setAttribute('hidden', 'true');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  payTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('aria-controls');

      payTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      payPanels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('hidden', 'true');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const panel = document.getElementById(targetId);
      if (panel) {
        panel.classList.add('active');
        panel.removeAttribute('hidden');
      }
    });
  });

  const cardForm = document.getElementById('card-form');
  if (cardForm) {
    cardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cardNum = document.getElementById('card-num').value.trim();
      if (cardNum.length < 12) {
        showToast('err_required');
        return;
      }
      showToast('msg_card_success');
      cardForm.reset();
      closeModal();
    });
  }
}

// ==========================================================================
// Lipa Na M-Pesa STK Push Simulator
// ==========================================================================

function initMpesaSimulator() {
  const simBtn = document.getElementById('mpesa-sim-btn');
  const phoneInput = document.getElementById('mpesa-phone');
  const amountInput = document.getElementById('mpesa-amount');

  if (!simBtn || !phoneInput || !amountInput) return;

  simBtn.addEventListener('click', () => {
    const phoneVal = phoneInput.value.trim();
    const amountVal = amountInput.value.trim();

    phoneInput.closest('.form-group').classList.remove('has-error');
    amountInput.closest('.form-group').classList.remove('has-error');

    let isValid = true;

    if (!phoneVal || !validateKenyanPhone(phoneVal)) {
      phoneInput.closest('.form-group').classList.add('has-error');
      showToast('err_phone_invalid');
      isValid = false;
    }

    const amountNum = parseFloat(amountVal);
    if (!amountVal || isNaN(amountNum) || amountNum < 10) {
      amountInput.closest('.form-group').classList.add('has-error');
      showToast('err_amount_low');
      isValid = false;
    }

    if (!isValid) return;

    simBtn.disabled = true;
    showToast('msg_mpesa_sim_start');

    setTimeout(() => {
      showToast('msg_mpesa_sim_success');
      simBtn.disabled = false;

      phoneInput.value = '';
      amountInput.value = '';
      const modal = document.getElementById('donation-modal');
      if (modal) {
        modal.setAttribute('hidden', 'true');
        document.body.style.overflow = '';
      }
    }, 2500);
  });
}

// ==========================================================================
// Firebase Authentication: Sign Up, Log In, Dashboard Protection
// ==========================================================================

function initAuth() {
  const signupForm = document.getElementById('auth-signup-form');
  const loginForm = document.getElementById('auth-login-form');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('auth-signup-name').value.trim();
      const email = document.getElementById('auth-signup-email').value.trim();
      const password = document.getElementById('auth-signup-password').value;
      const confirm = document.getElementById('auth-signup-confirm').value;
      const errorEl = document.getElementById('auth-signup-password-error');
      const passwordGroup = document.getElementById('auth-signup-password').closest('.form-group');
      const confirmGroup = document.getElementById('auth-signup-confirm').closest('.form-group');

      errorEl.textContent = '';
      passwordGroup.classList.remove('has-error');
      confirmGroup.classList.remove('has-error');

      if (password !== confirm) {
        errorEl.textContent = 'Passwords do not match.';
        confirmGroup.classList.add('has-error');
        return;
      }

      if (password.length < 6) {
        errorEl.textContent = 'Password must be at least 6 characters.';
        passwordGroup.classList.add('has-error');
        return;
      }

      window.firebaseFns.createUserWithEmailAndPassword(window.firebaseAuth, email, password)
        .then((cred) => window.firebaseFns.updateProfile(cred.user, { displayName: name }))
        .then(() => window.firebaseFns.signOut(window.firebaseAuth))
        .then(() => {
          signupForm.reset();
          showToast('msg_form_success');
          window.location.hash = '#auth-login-section';
        })
        .catch((error) => {
          errorEl.textContent = error.message;
          passwordGroup.classList.add('has-error');
        });
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-login-email').value.trim();
      const password = document.getElementById('auth-login-password').value;
      const errorEl = document.getElementById('auth-login-password-error');
      const loginPasswordGroup = document.getElementById('auth-login-password').closest('.form-group');

      errorEl.textContent = '';
      loginPasswordGroup.classList.remove('has-error');

      window.firebaseFns.signInWithEmailAndPassword(window.firebaseAuth, email, password)
        .then(() => {
          loginForm.reset();
          window.location.hash = '#dashboard-section';
        })
        .catch(() => {
          errorEl.textContent = 'Incorrect email or password.';
          loginPasswordGroup.classList.add('has-error');
        });
    });
  }

  // Protect the dashboard: redirect to login if not authenticated
  window.addEventListener('hashchange', () => {
    const currentUser = window.firebaseAuth ? window.firebaseAuth.currentUser : null;
    if (window.location.hash === '#dashboard-section' && !currentUser) {
      window.location.hash = '#auth-login-section';
    }
  });

  // Track login state and update nav/dashboard visibility
  const checkAuthReady = setInterval(() => {
    if (window.firebaseFns) {
      clearInterval(checkAuthReady);
      const gatedSectionIds = ['about-section', 'programs-section', 'stories-section', 'involved-section', 'contact-section'];
      const gatedNavLinks = document.querySelectorAll('.gated-nav-link');

      window.firebaseFns.onAuthStateChanged(window.firebaseAuth, (user) => {
        const signupLink = document.getElementById('link-auth-signup');
        const loginLink = document.getElementById('link-auth-login');
        const dashboardLink = document.getElementById('link-dashboard');
        const dashboardSection = document.getElementById('dashboard-section');
        const dashboardWelcome = document.getElementById('dashboard-welcome');

        if (user) {
          if (signupLink) signupLink.style.display = 'none';
          if (dashboardLink) dashboardLink.style.display = '';
          if (dashboardSection) dashboardSection.style.display = '';
          if (dashboardWelcome) dashboardWelcome.textContent = `Welcome, ${user.displayName || user.email}`;
          gatedNavLinks.forEach(link => { link.style.display = ''; });
          gatedSectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = '';
          });
          if (loginLink) {
            loginLink.textContent = 'Log Out';
            loginLink.href = '#';
            loginLink.onclick = (e) => {
              e.preventDefault();
              window.firebaseFns.signOut(window.firebaseAuth).then(() => {
                window.location.hash = '#hero-section';
              });
            };
          }
        } else {
          if (signupLink) signupLink.style.display = '';
          if (dashboardLink) dashboardLink.style.display = 'none';
          if (dashboardSection) dashboardSection.style.display = 'none';
          gatedNavLinks.forEach(link => { link.style.display = 'none'; });
          gatedSectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
          });
          if (loginLink) {
            loginLink.textContent = 'Log In';
            loginLink.href = '#auth-login-section';
            loginLink.onclick = null;
          }
          if (window.location.hash === '#dashboard-section' || gatedSectionIds.includes(window.location.hash.replace('#', ''))) {
            window.location.hash = '#auth-login-section';
          }
        }
      });
    }
  }, 100);
}
