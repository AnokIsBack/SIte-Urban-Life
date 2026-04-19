import { motion } from "framer-motion";

export default function App() {
  const navGroups = [
    {
      title: "Accueil",
      items: [{ href: "#accueil", label: "Accueil", icon: "🏠" }],
    },
    {
      title: "Règlement Légal",
      items: [
        { href: "#legal-home", label: "Vue d’ensemble", icon: "⚖️" },
        { href: "#lspd", label: "LSPD / BCSO", icon: "👮" },
        { href: "#ems", label: "EMS", icon: "🚑" },
        { href: "#entreprise", label: "Entreprise", icon: "🏢" },
        { href: "#activites-legales", label: "Activités légales", icon: "🎣" },
        { href: "#peche", label: "Pêche", icon: "🐟" },
        { href: "#acier", label: "Acier", icon: "🪨" },
        { href: "#scierie", label: "Scierie", icon: "🪵" },
        { href: "#course", label: "Course", icon: "🏁" },
      ],
    },
    {
      title: "Règlement Illégal",
      items: [
        { href: "#illegal-home", label: "Vue d’ensemble", icon: "🔫" },
        { href: "#illegal-general", label: "Règlement illégal", icon: "⚠️" },
        { href: "#iles", label: "Les îles", icon: "🏝️" },
        { href: "#activites-illegales", label: "Activités illégales", icon: "💀" },
        { href: "#drogues", label: "Drogues", icon: "🧪" },
        { href: "#pacific", label: "Braquage Pacific", icon: "🏦" },
        { href: "#bijouterie", label: "Bijouterie", icon: "💎" },
        { href: "#superettes", label: "Supérettes", icon: "🛒" },
        { href: "#carjack", label: "Carjack", icon: "🚗" },
        { href: "#fourgon", label: "Fourgon", icon: "🚚" },
        { href: "#cambriolage", label: "Cambriolage", icon: "🏚️" },
      ],
    },
  ];

  const legalCards = [
    { href: "#lspd", title: "Règlement LSPD / BCSO", icon: "👮", desc: "Forces de l’ordre, procédures et poursuites." },
    { href: "#ems", title: "Règlement EMS", icon: "🚑", desc: "Service médical, interventions et matériel." },
    { href: "#entreprise", title: "Règlement Entreprise", icon: "🏢", desc: "Patrons, employés et véhicules pros." },
    { href: "#activites-legales", title: "Activités légales", icon: "🎣", desc: "Métiers, pêche, acier, scierie et course." },
  ];

  const illegalCards = [
    { href: "#illegal-general", title: "Règlement Illégal", icon: "⚠️", desc: "Règles générales des scènes illégales." },
    { href: "#iles", title: "Les îles", icon: "🏝️", desc: "Cayo, RoxWood et accès spéciaux." },
    { href: "#activites-illegales", title: "Activités illégales", icon: "💀", desc: "Drogues, braquages et cambriolages." },
  ];

  const lspd = {
    tenue: [
      "Les tenues et véhicules LSPD / BCSO sont obligatoires en service.",
      "En civil, un signe distinctif clair doit montrer l’appartenance aux forces de l’ordre : insigne, blason ou identification visible.",
    ],
    interdits: [
      "Interdiction de revenir au poste en pleine scène.",
      "Interdiction de contrôler une personne sans être en service ou sans affichage clair du statut policier.",
      "Interdiction d’utiliser les armes de service hors service.",
      "Interdiction absolue de vendre une arme LSPD / BCSO.",
      "Interdiction de confisquer un citoyen déjà au sol.",
      "Interdiction de laisser un individu plus d’une heure en cellule sans contexte RP justifié.",
      "Interdiction de passer d’un RP illégal à un RP LSPD / BCSO sans wipe.",
      "Interdiction d’incarner un ripou sans autorisation staff par ticket.",
      "Interdiction de garder les armes saisies pour usage personnel.",
      "Interdiction d’utiliser des armes illégales en tant qu’agent.",
      "La LSPD / BCSO ne peut sortir que deux véhicules d’intervention rapide en même temps sur la carte.",
      "Interdiction de distinguer argent propre et argent sale sans justification RP et sans vérification cohérente.",
      "Interdiction d’utiliser le défibrillateur pour avantager une scène ; après réanimation, attendre 10 minutes avant de ressortir une arme à feu.",
      "Interdiction de fouiller sans motif valide selon le niveau d’alerte ; un simple délit de fuite ne justifie qu’une palpation de sécurité.",
      "Interdiction de braquer ou prendre un otage seul en étant en service LSPD / BCSO.",
    ],
    cadets: [
      "Les cadets et officiers doivent respecter le fear RP en infériorité ou en situation illégale.",
      "Les cadets ne peuvent pas avoir de casier judiciaire.",
      "Les cadets ne peuvent pas partir en patrouille seuls.",
    ],
    fouille: [
      "Le suspect monte dans un véhicule de police.",
      "Le suspect dissimule son visage.",
      "Le suspect porte un holster plein.",
      "Le suspect porte un gilet pare-balles.",
      "Le suspect est menaçant.",
      "La liste n’est pas exhaustive, mais toute fouille doit rester cohérente et justifiée RP.",
    ],
    poursuite: [
      "Les pneus d’un véhicule en course-poursuite peuvent être visés si les occupants ont ouvert le feu ou si la conduite devient réellement dangereuse.",
      "Le PIT est autorisé uniquement sous conditions et ne doit jamais servir à provoquer volontairement un accident pour mettre fin à la scène.",
      "Après deux tentatives de PIT infructueuses, des tirs sur les pneus peuvent être autorisés.",
      "La LSPD / BCSO peut effectuer jusqu’à trois descentes par semaine et par service sur des points de drogue sans dossier, avec un seul point visé par descente.",
      "En cas de fusillade sur un point de drogue, la LSPD peut intervenir avec un effectif renforcé sans que cela compte dans le quota des descentes.",
      "Les forces de l’ordre peuvent patrouiller aux abords des zones sensibles, mais ne peuvent pas y intervenir sans motif RP valable.",
      "Un seul sniper est autorisé par scène côté LSPD / BCSO ; deux maximum lors d’une scène conjointe entre les deux services.",
      "Les peines de prison fédérale doivent passer par une demande validée via ticket administrateur.",
    ],
    ppa: [
      "Avec sac mais sans PPA : confiscation possible des armes lourdes et légères.",
      "Avec sac et avec PPA : pas de confiscation lors d’un contrôle routinier classique.",
      "Sans sac et sans PPA : confiscation possible des armes légères uniquement.",
      "Sans sac et avec PPA : pas de confiscation lors d’un contrôle routinier classique.",
      "Lorsqu’un citoyen ouvre le feu en ville, l’arme utilisée peut être confisquée quel que soit son PPA.",
    ],
    autres: [
      "Les agents doivent faire preuve de professionnalisme, sans abus de pouvoir, sans insultes et avec maîtrise de soi.",
      "Un policier corrompu est plus exposé à une mort RP.",
      "Un officier peut être exposé à une mort RP s’il interfère dans les négociations ou met en danger ses collègues ou les otages.",
      "Le port du masque est réservé à l’unité d’intervention et uniquement lors de grosses scènes.",
      "Un changement de DEFCON peut être demandé via ticket.",
      "En cas de troll RP devant un bâtiment des forces de l’ordre, une interdiction territoriale RP d’une semaine peut être appliquée.",
      "Un membre LSPD / BCSO compte pour une seule personne dans le rapport de force.",
      "Un citoyen doit posséder les permis adaptés aux armes légères et lourdes ; sans permis, l’ensemble des armes peut être confisqué.",
      "Les indics doivent passer par les hauts gradés, protéger leur identité et seuls les membres de l’état-major doivent connaître leur identité réelle.",
    ],
  };

  const ems = [
    "Interdiction d’utiliser son service EMS pour participer à de l’illégal.",
    "Interdiction de vendre ou échanger medikits et bandages.",
    "Interdiction d’intervenir sur une scène illégale pendant les tirs.",
    "Interdiction de modifier esthétiquement le véhicule EMS.",
    "Interdiction de favoriser un groupe particulier avec son service médical.",
    "Interdiction de dissimuler son visage ou de porter un équipement incohérent en service.",
    "Un EMS peut intervenir dans un quartier seulement si l’accès lui est donné RP.",
    "En cas de refus de présentation de carte d’identité, la LSPD / BCSO peut être sollicitée.",
    "Une ATA de 10 minutes est prévue pour les morts par arme.",
    "La tenue de service est obligatoire.",
    "Le protocole d’intervention doit être respecté.",
    "En fin de service, le matériel doit être déposé dans le coffre de l’entreprise.",
  ];

  const entreprise = {
    general: [
      "Interdiction pour un patron de vider ou utiliser le coffre entreprise à des fins personnelles.",
      "Une entreprise hors boutique peut être récupérée si aucune activité patronale n’est observée pendant deux semaines.",
      "Interdiction de vendre ou donner son entreprise ; toute reprise doit passer par ticket.",
      "Interdiction de cumuler plusieurs emplois légaux en même temps.",
      "Le vol dans le coffre entreprise est interdit et peut entraîner sanction et remboursement.",
    ],
    mecano: [
      "Interdiction d’équiper un véhicule avec une mitrailleuse ou un armement incohérent.",
      "Interdiction de mettre un véhicule en fourrière sans autorisation du propriétaire, sauf abandon manifeste.",
      "Interdiction de déverrouiller un véhicule trouvé dans la rue sans demande claire ou autorisation du propriétaire.",
    ],
    concessionnaire: [
      "Interdiction d’attribuer gratuitement un véhicule à un ami ou à un joueur sans procédure.",
      "Toute acquisition de véhicule doit être payée et cohérente.",
    ],
    occasion: [
      "Interdiction de vendre un véhicule à l’aveugle : l’acheteur doit connaître le contenu du coffre.",
      "Aucun remboursement si l’acheteur valide le véhicule en connaissant son contenu.",
      "Les véhicules d’entreprise, LSPD, BCSO, gouvernementaux et hospitaliers ne doivent pas être vendus sans autorisation.",
      "La vente d’un véhicule de fonction à une personne non autorisée peut mener à de lourdes sanctions.",
    ],
  };

  const legalActivities = [
    "La section légale inclut plusieurs activités accessibles côté civil.",
    "Exemples visibles depuis la navigation : pêche, acier, scierie et course.",
    "Chaque activité doit être jouée proprement, sans abus de farm ni détournement HRP.",
  ];

  const peche = [
    "Pour commencer, il faut acheter une canne à pêche dans les LTD de la ville.",
    "La canne en bois est vendue au LTD du Sud pour 200 000 $.",
    "La canne en aluminium est vendue au LTD du Nord pour 1 000 000 $.",
    "Les appâts existent en plusieurs types : eau douce, tropical et mer.",
    "Chaque appât coûte 1 000 $ unité.",
    "Chaque type d’appât correspond à une zone de pêche spécifique.",
    "Sur place, un PNJ “Pêcheur Expert” permet de consulter le type de zone, le type d’appât, les crafts, l’aide et le profil pêcheur.",
    "Le profil permet notamment de voir les poissons pêchés, les zones et certaines statistiques.",
    "Le joueur doit utiliser sa canne puis son appât pour lancer sa session de pêche.",
  ];

  const acier = [
    "L’activité acier repose sur trois types de points : récolte, traitement et vente.",
    "Pour commencer, il faut se rendre sur un point de récolte acier.",
    "Une fois sur place, il faut appuyer sur E pour lancer la récolte.",
    "Il est conseillé de prendre un véhicule avec de la place dans le coffre pour transporter la récolte.",
    "Après la récolte, il faut se rendre sur un point de traitement acier.",
    "Une fois sur le point de traitement, il faut appuyer sur E pour lancer le traitement.",
    "La dernière étape consiste à se rendre sur un point de vente acier.",
  ];

  const scierie = [
    "L’activité scierie fonctionne avec un système de récolte de bois.",
    "Le bois doit être transformé avant d’être vendu.",
    "Les véhicules doivent être utilisés de manière cohérente pour transporter les ressources.",
    "Le farming en groupe doit rester réaliste et non abusif.",
    "Les interactions RP doivent être respectées.",
  ];

  const course = [
    "Les courses doivent être organisées de manière RP.",
    "Les paris doivent rester raisonnables et cohérents.",
    "Le fair-play est obligatoire, toute triche est sanctionnée.",
    "Les courses illégales doivent être encadrées RP.",
    "Les collisions volontaires sont interdites sauf si justifiées RP.",
  ];

  const illegalGeneral = [
    "Toute scène commencée doit être jouée jusqu’à son terme.",
    "En cas de problème, il faut terminer la scène, noter l’heure et les joueurs concernés, puis faire un ticket ou un report.",
    "Les scènes coupées en plein milieu peuvent être sanctionnées sévèrement.",
    "Toute personne en scène illégale uniquement doit rester masquée.",
    "Les scènes doivent être menées à terme même si une erreur est reprochée à un autre joueur.",
    "Les tirs sont réservés aux personnes disposant d’un rôle illégal.",
    "Une personne morte n’est pas lootable sauf sur point chaud ou dans les cas explicitement prévus.",
    "Le fear RP doit être joué obligatoirement ; les sommations suicides sont interdites.",
    "Les groupes doivent organiser un premier rendez-vous avant toute interaction agressive, sauf validation staff exceptionnelle.",
    "Les CVC en ville restent interdits.",
    "Sur point chaud, le groupe gagnant peut vendre et le groupe perdant ainsi que toute personne sous ATA doit rentrer au quartier.",
    "Les coups de pression et certaines humiliations RP légères sont autorisés, mais danser sur les corps morts est interdit.",
    "Dans les zones dangereuses, le fear RP est obligatoire.",
    "Braquer une personne n’est autorisé que si cela sert un objectif RP ; c’est interdit en zone légale ou sur certaines activités spécifiques.",
    "Le vol de véhicule est autorisé.",
    "Les activités illégales qui rapportent des points et de l’expérience sont interdites entre 3h00 et 10h00.",
    "En interrogatoire, mentir sur son groupe est interdit mais mentir sur son grade est autorisé.",
    "Les casques pare-balles type biker ou militaire sont interdits sauf organisations et opérations spécifiques.",
    "Les armes lourdes avec sacoche sont interdites.",
    "Farmer depuis un véhicule et/ou arme à la main est interdit.",
    "Se rajouter à une scène en cours, back gunfight, re-drop et plusieurs formes de bait sont interdits hors exceptions prévues.",
    "Retourner quartier, zone safe ou villa pour échapper à une poursuite est interdit.",
    "Toute discussion HRP ou usage abusif des commandes pendant la scène est sanctionnable ; les litiges se règlent après la scène.",
    "Les sommations se font avec 10 balles en l’air, hors véhicule et sans silencieux.",
  ];

  const iles = [
    "Le gouverneur de Cayo dispose de larges pouvoirs sur son île, aussi bien côté légal que côté illégal.",
    "Cayo doit être autonome côté légal : garage, boutique, hôpital, police, club et autres services doivent y vivre en RP.",
    "Selon les relations avec Los Santos, un convoi diplomatique vers la ville peut être autorisé puis retiré en cas d’écart.",
    "Entrer sur Cayo sans pass est interdit et expose à une mort RP.",
    "La LSPD / BCSO ne peut pas se rendre sur Cayo, y compris en cas de back sur l’île.",
    "Les résidents ne peuvent pas tirer sur une personne en dehors de l’île après le portique.",
    "Le groupe résidant à RoxWood peut contrôler les accès et sorties.",
    "Le groupe résidant à RoxWood peut missionner un autre groupe illégal pour ce contrôle.",
    "Les EMS sont autorisés à entrer sur RoxWood sur présentation de leur carte EMS.",
    "Les résidents RoxWood peuvent contrôler l’accès au farm de drogue de l’île.",
    "Entrer sur RoxWood sans autorisation est interdit et expose à une mort RP.",
    "La LSPD / BCSO ne peut pas se rendre sur RoxWood ; après plusieurs retours signalés, une descente peut être demandée.",
    "Les résidents de RoxWood ne peuvent pas partir en convoi dans Los Santos en se revendiquant ouvertement RoxWood.",
  ];

  const activitesIllegales = [
    "La section activités illégales regroupe les drogues, le braquage Pacific, la bijouterie, les supérettes, le carjack, le fourgon et le cambriolage.",
    "Chaque activité a ses propres conditions de lancement, de fréquence ou de matériel.",
  ];

  const drogues = [
    "Les points de drogue et points de vente sont centraux dans l’économie illégale du serveur.",
    "Posséder ou revendiquer une zone de vente passe par la vente de drogue sur cette zone.",
    "Les zones de vente servent notamment à acheter au shop illégal des armes et autres équipements.",
    "Les armes achetées au shop illégal peuvent ensuite être revendues à d’autres groupes.",
    "Certaines zones de vente sont réservées à des gangs ou organisations spécifiques.",
    "Chaque drogue peut être revendue sur n’importe quel point de vente adapté.",
    "La touche F7 permet d’accéder à la liste des territoires lorsqu’on fait partie d’un groupe.",
    "Vendre de la drogue rapporte des points de zone au groupe et de l’argent sale directement au joueur.",
  ];

  const pacific = [
    "Le braquage Pacific n’est disponible qu’avec GDOC préalable.",
    "Sans GDOC, le braquage ne peut pas être lancé.",
    "Comme pour les autres braquages, il faut attendre plusieurs heures entre deux braquages, généralement entre 3 et 5 heures.",
  ];

  const bijouterie = [
    "La bijouterie peut rapporter jusqu’à 5 000 000 $ d’argent sale si toutes les étapes sont réussies.",
    "Comme pour les autres braquages, il faut attendre plusieurs heures entre deux braquages.",
    "Le matériel mentionné comprend notamment 3 thermites, 2 découpeuses de vitres et 4 perceuses.",
    "Après le braquage, l’équipe doit encore gérer la poursuite policière puis se cacher le temps que la tension redescende.",
  ];

  const superettes = [
    "Chaque supérette peut être braquée toutes les 60 minutes.",
    "Le braquage se lance en entrant dans une supérette avec une arme en main et en visant le caissier.",
    "Une fois la jauge de menace remplie, le contenu de la caisse est donné.",
    "Le sac se ramasse avec E et l’argent est directement reçu en argent sale.",
  ];

  const carjack = [
    "Le carjack consiste à voler un véhicule à un joueur ou PNJ.",
    "Une interaction RP est obligatoire avant le vol.",
    "Le fear RP doit être respecté par la victime.",
    "Le vol doit rester cohérent et non abusif.",
    "Les abus de carjack sont sanctionnés.",
  ];

  const fourgon = [
    "Les braquages de fourgon sont des activités aléatoires lancées par le serveur.",
    "Quand l’alerte apparaît, il faut se rendre à l’endroit indiqué sur la carte.",
    "La LSPD est avertie au bout de 30 secondes.",
    "Sur zone, il faut casser le fourgon en le frappant ou en tirant dessus.",
    "Une fois le fourgon ouvert, les sacs de billets peuvent être récupérés et rapportent de l’argent sale.",
  ];

  const cambriolage = [
    "Chaque joueur peut réaliser un cambriolage par jour.",
    "Le reboot du serveur a lieu tous les jours à 15h.",
    "Pour lancer un cambriolage, il faut un lockpick et un tournevis.",
    "Les maisons cambriolables sont indiquées sur la carte par une petite maison rouge.",
    "Devant la porte, un point permet de commencer le cambriolage.",
    "Le bruit dans la maison peut réveiller un PNJ qui peut tirer et appeler la police.",
    "Le coffre-fort n’apparaît qu’une fois sur deux mais peut rapporter beaucoup d’argent sale.",
    "Le joueur doit voler les objets, les stocker dans le coffre du véhicule et revenir autant que possible avant l’arrivée des forces de l’ordre.",
    "Les objets volés doivent ensuite être revendus au point prévu.",
  ];

  return (
    <div className="min-h-screen bg-[#04070d] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden lg:block w-80 shrink-0 bg-[#050a14] border-r border-cyan-500/10">
          <div className="sticky top-0 h-screen overflow-y-auto p-6">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/logo.png"
                alt="Logo Urban Life"
                className="w-12 h-12 rounded-2xl object-cover shadow-lg ring-1 ring-cyan-400/20"
              />
              <div>
                <h1 className="text-lg font-bold text-cyan-300">Urban Life</h1>
                <p className="text-xs text-slate-400">Règlement RP</p>
              </div>
            </div>

            <div className="space-y-6">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-slate-500">
                    {group.title}
                  </p>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-cyan-500/10 hover:text-white"
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-8 space-y-8">
          <motion.section
            id="accueil"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-cyan-400/20 shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/banner.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            <div className="relative p-8 sm:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-300">
                Urban Life • Règlement RP
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                RÈGLEMENT URBAN LIFE
              </h2>
              <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
                Consultez toutes les règles officielles du serveur. Respectez-les pour une expérience RP propre, cohérente et immersive.
              </p>
            </div>
          </motion.section>

          <Section id="legal-home" title="Règlement RP Légal" icon="⚖️" subtitle="Forces de l’ordre, EMS, entreprises et activités légales.">
            <CardGrid cards={legalCards} />
          </Section>

          <Section id="lspd" title="Règlement LSPD / BCSO" icon="👮" subtitle="Forces de l’ordre, fouilles, poursuites, PPA et procédures RP.">
            <div className="grid gap-6 xl:grid-cols-2">
              <RuleCard title="Tenue & service" items={lspd.tenue} />
              <RuleCard title="Interdictions principales" items={lspd.interdits} />
              <RuleCard title="Règles des cadets" items={lspd.cadets} />
              <RuleCard title="Motifs de fouille" items={lspd.fouille} />
              <RuleCard title="Poursuites et PIT" items={lspd.poursuite} />
              <RuleCard title="Contrôles & PPA" items={lspd.ppa} />
              <RuleCard title="Autres règles" items={lspd.autres} />
            </div>
          </Section>

          <Section id="ems" title="Règlement EMS" icon="🚑" subtitle="Service médical, neutralité, interventions et matériel.">
            <RuleCard title="Règles EMS" items={ems} />
          </Section>

          <Section id="entreprise" title="Règlement Entreprise" icon="🏢" subtitle="Patrons, employés, mécanos, concessionnaires et ventes d’occasion.">
            <div className="grid gap-6 lg:grid-cols-2">
              <RuleCard title="Général" items={entreprise.general} />
              <RuleCard title="Mécano" items={entreprise.mecano} />
              <RuleCard title="Concessionnaire" items={entreprise.concessionnaire} />
              <RuleCard title="Occasion" items={entreprise.occasion} />
            </div>
          </Section>

          <Section id="activites-legales" title="Activités légales" icon="🎣" subtitle="Pêche, acier, scierie et course.">
            <RuleCard title="Vue d’ensemble" items={legalActivities} />
          </Section>

          <Section id="peche" title="Pêche" icon="🐟" subtitle="Matériel, appâts et fonctionnement.">
            <RuleCard title="Pêche" items={peche} />
          </Section>

          <Section id="acier" title="Acier" icon="🪨" subtitle="Récolte, traitement et vente.">
            <RuleCard title="Acier" items={acier} />
          </Section>

          <Section id="scierie" title="Scierie" icon="🪵" subtitle="Récolte de bois et transformation.">
            <RuleCard title="Scierie" items={scierie} />
          </Section>

          <Section id="course" title="Course" icon="🏁" subtitle="Organisation, fair-play et cadre RP.">
            <RuleCard title="Course" items={course} />
          </Section>

          <Section id="illegal-home" title="Règlement RP Illégal" icon="🔫" subtitle="Vue d’ensemble, îles et activités illégales.">
            <CardGrid cards={illegalCards} />
          </Section>

          <Section id="illegal-general" title="Règlement illégal" icon="⚠️" subtitle="Règles générales des scènes illégales.">
            <RuleCard title="Règlement illégal" items={illegalGeneral} />
          </Section>

          <Section id="iles" title="Les îles" icon="🏝️" subtitle="Cayo, RoxWood et accès spéciaux.">
            <RuleCard title="Les îles" items={iles} />
          </Section>

          <Section id="activites-illegales" title="Activités illégales" icon="💀" subtitle="Braquages, drogues et autres activités.">
            <RuleCard title="Activités illégales" items={activitesIllegales} />
          </Section>

          <Section id="drogues" title="Drogues" icon="🧪" subtitle="Zones, ventes et économie illégale.">
            <RuleCard title="Drogues" items={drogues} />
          </Section>

          <Section id="pacific" title="Braquage Pacific" icon="🏦" subtitle="Conditions et organisation.">
            <RuleCard title="Braquage Pacific" items={pacific} />
          </Section>

          <Section id="bijouterie" title="Bijouterie" icon="💎" subtitle="Matériel, gains et fuite.">
            <RuleCard title="Bijouterie" items={bijouterie} />
          </Section>

          <Section id="superettes" title="Supérettes" icon="🛒" subtitle="Braquages rapides et cooldown.">
            <RuleCard title="Supérettes" items={superettes} />
          </Section>

          <Section id="carjack" title="Carjack" icon="🚗" subtitle="Vol de véhicule et interaction RP.">
            <RuleCard title="Carjack" items={carjack} />
          </Section>

          <Section id="fourgon" title="Fourgon" icon="🚚" subtitle="Braquage aléatoire et sacs d’argent.">
            <RuleCard title="Fourgon" items={fourgon} />
          </Section>

          <Section id="cambriolage" title="Cambriolage" icon="🏚️" subtitle="Maisons, outils et revente.">
            <RuleCard title="Cambriolage" items={cambriolage} />
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ id, title, subtitle, icon, children }) {
  return (
    <section id={id} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y:
