export default function App() {
  const navGroups = [
    {
      title: 'Accueil',
      items: [{ href: '#accueil', label: 'Accueil', icon: '🏠' }],
    },
    {
      title: 'Règlement Légal',
      items: [
        { href: '#legal-home', label: 'Vue d’ensemble', icon: '⚖️' },
        { href: '#lspd', label: 'LSPD / BCSO', icon: '👮' },
        { href: '#ems', label: 'EMS', icon: '🚑' },
        { href: '#entreprise', label: 'Entreprise', icon: '🏢' },
        { href: '#activites-legales', label: 'Activités légales', icon: '🎣' },
        { href: '#peche', label: 'Pêche', icon: '🐟' },
        { href: '#acier', label: 'Acier', icon: '🪨' },
        { href: '#scierie', label: 'Scierie', icon: '🪵' },
        { href: '#course', label: 'Course', icon: '🏁' },
      ],
    },
    {
      title: 'Règlement Illégal',
      items: [
        { href: '#illegal-home', label: 'Vue d’ensemble', icon: '🔫' },
        { href: '#illegal-general', label: 'Règlement illégal', icon: '⚠️' },
        { href: '#iles', label: 'Les îles', icon: '🏝️' },
        { href: '#activites-illegales', label: 'Activités illégales', icon: '💀' },
        { href: '#drogues', label: 'Drogues', icon: '🧪' },
        { href: '#pacific', label: 'Braquage Pacific', icon: '🏦' },
        { href: '#bijouterie', label: 'Bijouterie', icon: '💎' },
        { href: '#supérettes', label: 'Supérettes', icon: '🛒' },
        { href: '#carjack', label: 'Carjack', icon: '🚗' },
        { href: '#fourgon', label: 'Fourgon', icon: '🚚' },
        { href: '#cambriolage', label: 'Cambriolage', icon: '🏚️' },
      ],
    },
  ]

  const legalCards = [
    { href: '#lspd', title: 'Règlement LSPD / BCSO', icon: '👮' },
    { href: '#ems', title: 'Règlement EMS', icon: '🚑' },
    { href: '#entreprise', title: 'Règlement Entreprise', icon: '🏢' },
    { href: '#activites-legales', title: 'Activités légales', icon: '🎣' },
  ]

  const illegalCards = [
    { href: '#illegal-general', title: 'Règlement Illégal', icon: '⚠️' },
    { href: '#iles', title: 'Les îles', icon: '🏝️' },
    { href: '#activites-illegales', title: 'Activités illégales', icon: '💀' },
  ]

  const lspd = {
    tenue: [
      'Les tenues et véhicules LSPD / BCSO sont obligatoires en service.',
      'En civil, un signe distinctif clair doit montrer l’appartenance aux forces de l’ordre : insigne, blason ou identification visible.',
    ],
    interdits: [
      'Interdiction de revenir au poste en pleine scène.',
      'Interdiction de contrôler une personne sans être en service ou sans affichage clair du statut policier.',
      'Interdiction d’utiliser les armes de service hors service.',
      'Interdiction absolue de vendre une arme LSPD / BCSO.',
      'Interdiction de confisquer un citoyen déjà au sol.',
      'Interdiction de laisser un individu plus d’une heure en cellule sans contexte RP justifié.',
      'Interdiction de passer d’un RP illégal à un RP LSPD / BCSO sans wipe.',
      'Interdiction d’incarner un ripou sans autorisation staff par ticket.',
      'Interdiction de garder les armes saisies pour usage personnel.',
      'Interdiction d’utiliser des armes illégales en tant qu’agent.',
      'La LSPD / BCSO ne peut sortir que deux véhicules d’intervention rapide en même temps sur la carte.',
      'Interdiction de distinguer argent propre et argent sale sans justification RP et sans vérification cohérente.',
      'Interdiction d’utiliser le défibrillateur pour avantager une scène ; après réanimation, attendre 10 minutes avant de ressortir une arme à feu.',
      'Interdiction de fouiller sans motif valide selon le niveau d’alerte ; un simple délit de fuite ne justifie qu’une palpation de sécurité.',
      'Interdiction de braquer ou prendre un otage seul en étant en service LSPD / BCSO.',
    ],
    cadets: [
      'Les cadets et officiers doivent respecter le fear RP en infériorité ou en situation illégale.',
      'Les cadets ne peuvent pas avoir de casier judiciaire.',
      'Les cadets ne peuvent pas partir en patrouille seuls.',
    ],
    fouille: [
      'Le suspect monte dans un véhicule de police.',
      'Le suspect dissimule son visage.',
      'Le suspect porte un holster plein.',
      'Le suspect porte un gilet pare-balles.',
      'Le suspect est menaçant.',
      'La liste n’est pas exhaustive, mais toute fouille doit rester cohérente et justifiée RP.',
    ],
    poursuite: [
      'Les pneus d’un véhicule en course-poursuite peuvent être visés si les occupants ont ouvert le feu ou si la conduite devient réellement dangereuse.',
      'Le PIT est autorisé uniquement sous conditions et ne doit jamais servir à provoquer volontairement un accident pour mettre fin à la scène.',
      'Après deux tentatives de PIT infructueuses, des tirs sur les pneus peuvent être autorisés.',
      'La LSPD / BCSO peut effectuer jusqu’à trois descentes par semaine et par service sur des points de drogue sans dossier, avec un seul point visé par descente.',
      'En cas de fusillade sur un point de drogue, la LSPD peut intervenir avec un effectif renforcé sans que cela compte dans le quota des descentes.',
      'Les forces de l’ordre peuvent patrouiller aux abords des zones sensibles, mais ne peuvent pas y intervenir sans motif RP valable.',
      'Un seul sniper est autorisé par scène côté LSPD / BCSO ; deux maximum lors d’une scène conjointe entre les deux services.',
      'Les peines de prison fédérale doivent passer par une demande validée via ticket administrateur.',
    ],
    ppa: [
      'Avec sac mais sans PPA : confiscation possible des armes lourdes et légères.',
      'Avec sac et avec PPA : pas de confiscation lors d’un contrôle routinier classique.',
      'Sans sac et sans PPA : confiscation possible des armes légères uniquement.',
      'Sans sac et avec PPA : pas de confiscation lors d’un contrôle routinier classique.',
      'Lorsqu’un citoyen ouvre le feu en ville, l’arme utilisée peut être confisquée quel que soit son PPA.',
    ],
    autres: [
      'Les agents doivent faire preuve de professionnalisme, sans abus de pouvoir, sans insultes et avec maîtrise de soi.',
      'Un policier corrompu est plus exposé à une mort RP.',
      'Un officier peut être exposé à une mort RP s’il interfère dans les négociations ou met en danger ses collègues ou les otages.',
      'Le port du masque est réservé à l’unité d’intervention et uniquement lors de grosses scènes.',
      'Un changement de DEFCON peut être demandé via ticket.',
      'En cas de troll RP devant un bâtiment des forces de l’ordre, une interdiction territoriale RP d’une semaine peut être appliquée.',
      'Un membre LSPD / BCSO compte pour une seule personne dans le rapport de force.',
      'Un citoyen doit posséder les permis adaptés aux armes légères et lourdes ; sans permis, l’ensemble des armes peut être confisqué.',
      'Les indics doivent passer par les hauts gradés, protéger leur identité et seuls les membres de l’état-major doivent connaître leur identité réelle.',
    ],
  }

  const ems = [
    'Interdiction d’utiliser son service EMS pour participer à de l’illégal.',
    'Interdiction de vendre ou échanger medikits et bandages.',
    'Interdiction d’intervenir sur une scène illégale pendant les tirs.',
    'La tenue de service est obligatoire.',
    'Le protocole d’intervention doit être respecté.',
    'Une ATA de 10 minutes est prévue pour les morts par arme.',
    'En fin de service, le matériel doit être rangé dans le coffre de l’entreprise.',
  ]

  const entreprise = {
    general: [
      'Interdiction pour un patron de vider ou utiliser le coffre entreprise à des fins personnelles.',
      'Une entreprise hors boutique peut être récupérée si aucune activité patronale n’est observée pendant deux semaines.',
      'Interdiction de vendre ou donner son entreprise ; toute reprise doit passer par ticket.',
      'Interdiction de cumuler plusieurs emplois légaux en même temps.',
      'Le vol dans le coffre entreprise est interdit et peut entraîner sanction et remboursement.',
    ],
    mecano: [
      'Interdiction d’équiper un véhicule avec une mitrailleuse ou un armement incohérent.',
      'Interdiction de mettre un véhicule en fourrière sans autorisation du propriétaire, sauf abandon manifeste.',
      'Interdiction de déverrouiller un véhicule trouvé dans la rue sans demande claire ou autorisation du propriétaire.',
    ],
    concessionnaire: [
      'Interdiction d’attribuer gratuitement un véhicule à un ami ou à un joueur sans procédure.',
      'Toute acquisition de véhicule doit être payée et cohérente.',
    ],
    occasion: [
      'Interdiction de vendre un véhicule à l’aveugle : l’acheteur doit connaître le contenu du coffre.',
      'Aucun remboursement si l’acheteur valide le véhicule en connaissant son contenu.',
      'Les véhicules d’entreprise, LSPD, BCSO, gouvernementaux et hospitaliers ne doivent pas être vendus sans autorisation.',
      'La vente d’un véhicule de fonction à une personne non autorisée peut mener à de lourdes sanctions.',
    ],
  }

  const legalActivities = [
    'La section légale inclut plusieurs activités accessibles côté civil.',
    'Exemples visibles depuis la navigation : pêche, acier, scierie et course.',
    'Chaque activité doit être jouée proprement, sans abus de farm ni détournement HRP.',
  ]

  const peche = [
    'Pour commencer, il faut acheter une canne à pêche dans les LTD de la ville.',
    'La canne en bois est vendue dans des Ltd pour 250 000 $.',
    'La canne en Titane est vendue dans les Ltd pour  900 000 $.',
    'La canne Urban est vendue dans les Ltd pour 1 200 000 $.',
    'Chaque appât coûte 1 500 $ unité.',
    'Le joueur doit utiliser sa canne puis son appât pour lancer sa session de pêche.',
  ]

  const acier = [
    'L’activité acier repose sur trois types de points : récolte, traitement et vente.',
    'Pour commencer, il faut se rendre sur un point de récolte acier.',
    'Une fois sur place, il faut appuyer sur E pour lancer la récolte.',
    'Il est conseillé de prendre un véhicule avec de la place dans le coffre pour transporter la récolte.',
    'Après la récolte, il faut se rendre sur un point de traitement acier.',
    'Une fois sur le point de traitement, il faut appuyer sur E pour lancer le traitement.',
    'La dernière étape consiste à se rendre sur un point de vente acier.',
  ]

  const illegalGeneral = [
    'Toute scène commencée doit être jouée jusqu’à son terme.',
    'En cas de problème, il faut terminer la scène, noter l’heure et les joueurs concernés, puis faire un ticket ou un report.',
    'Les scènes coupées en plein milieu peuvent être sanctionnées sévèrement.',
    'Toute personne en scène illégale uniquement doit rester masquée.',
    'Les scènes doivent être menées à terme même si une erreur est reprochée à un autre joueur.',
    'Les tirs sont réservés aux personnes disposant d’un rôle illégal.',
    'Une personne morte n’est pas lootable sauf sur point chaud ou dans les cas explicitement prévus.',
    'Le fear RP doit être joué obligatoirement ; les sommations suicides sont interdites.',
    'Les groupes doivent organiser un premier rendez-vous avant toute interaction agressive, sauf validation staff exceptionnelle.',
    'Les CVC en ville restent interdits.',
    'Sur point chaud, le groupe gagnant peut vendre et le groupe perdant ainsi que toute personne sous ATA doit rentrer au quartier.',
    'Les coups de pression et certaines humiliations RP légères sont autorisés, mais danser sur les corps morts est interdit.',
    'Dans les zones dangereuses, le fear RP est obligatoire.',
    'Braquer une personne n’est autorisé que si cela sert un objectif RP ; c’est interdit en zone légale ou sur certaines activités spécifiques.',
    'Le vol de véhicule est autorisé.',
    'Les activités illégales qui rapportent des points et de l’expérience sont interdites entre 3h00 et 10h00.',
    'En interrogatoire, mentir sur son groupe est interdit mais mentir sur son grade est autorisé.',
    'Les casques pare-balles type biker ou militaire sont interdits sauf organisations et opérations spécifiques.',
    'Les armes lourdes avec sacoche sont interdites.',
    'Farmer depuis un véhicule et/ou arme à la main est interdit.',
    'Se rajouter à une scène en cours, back gunfight, re-drop et plusieurs formes de bait sont interdites hors exceptions prévues.',
    'Retourner quartier, zone safe ou villa pour échapper à une poursuite est interdit.',
    'Toute discussion HRP ou usage abusif des commandes pendant la scène est sanctionnable ; les litiges se règlent après la scène.',
    'Les sommations se font avec 10 balles en l’air, hors véhicule et sans silencieux.',
  ]

  const iles = [
    'Le gouverneur de Cayo dispose de larges pouvoirs sur son île, aussi bien côté légal que côté illégal.',
    'Cayo doit être autonome côté légal : garage, boutique, hôpital, police, club et autres services doivent y vivre en RP.',
    'Selon les relations avec Los Santos, un convoi diplomatique vers la ville peut être autorisé puis retiré en cas d’écart.',
    'Entrer sur Cayo sans pass est interdit et expose à une mort RP.',
    'La LSPD / BCSO ne peut pas se rendre sur Cayo, y compris en cas de back sur l’île.',
    'Les résidents ne peuvent pas tirer sur une personne en dehors de l’île après le portique.',
    'Le groupe résidant à RoxWood peut contrôler les accès et sorties.',
    'Le groupe résidant à RoxWood peut missionner un autre groupe illégal pour ce contrôle.',
    'Les EMS sont autorisés à entrer sur RoxWood sur présentation de leur carte EMS.',
    'Les résidents RoxWood peuvent contrôler l’accès au farm de drogue de l’île.',
    'Entrer sur RoxWood sans autorisation est interdit et expose à une mort RP.',
    'La LSPD / BCSO ne peut pas se rendre sur RoxWood ; après plusieurs retours signalés, une descente peut être demandée.',
    'Les résidents de RoxWood ne peuvent pas partir en convoi dans Los Santos en se revendiquant ouvertement RoxWood.',
  ]

  const activitesIllegales = [
    'La section activités illégales regroupe les drogues, le braquage Pacific, la bijouterie, les supérettes, le carjack, le fourgon et le cambriolage.',
    'Chaque activité a ses propres conditions de lancement, de fréquence ou de matériel.',
  ]

  const drogues = [
    'Les points de drogue et points de vente sont centraux dans l’économie illégale du serveur.',
    'Posséder ou revendiquer une zone de vente passe par la vente de drogue sur cette zone.',
    'Les zones de vente servent notamment à acheter au shop illégal des armes et autres équipements.',
    'Les armes achetées au shop illégal peuvent ensuite être revendues à d’autres groupes.',
    'Certaines zones de vente sont réservées à des gangs ou organisations spécifiques.',
    'Chaque drogue peut être revendue sur n’importe quel point de vente adapté.',
    'La touche F7 permet d’accéder à la liste des territoires lorsqu’on fait partie d’un groupe.',
    'Vendre de la drogue rapporte des points de zone au groupe et de l’argent sale directement au joueur.',
  ]

  const pacific = [
    'Le braquage Pacific n’est disponible qu’avec GDOC préalable.',
    'Sans GDOC, le braquage ne peut pas être lancé.',
    'Comme pour les autres braquages, il faut attendre plusieurs heures entre deux braquages, généralement entre 3 et 5 heures.',
  ]

  const bijouterie = [
    'La bijouterie peut rapporter jusqu’à 5 000 000 $ d’argent sale si toutes les étapes sont réussies.',
    'Comme pour les autres braquages, il faut attendre plusieurs heures entre deux braquages.',
    'Le matériel mentionné comprend notamment 3 thermites, 2 découpeuses de vitres et 4 perceuses.',
    'Après le braquage, l’équipe doit encore gérer la poursuite policière puis se cacher le temps que la tension redescende.',
  ]

  const superettes = [
    'Chaque supérette peut être braquée toutes les 60 minutes.',
    'Le braquage se lance en entrant dans une supérette avec une arme en main et en visant le caissier.',
    'Une fois la jauge de menace remplie, le contenu de la caisse est donné.',
    'Le sac se ramasse avec E et l’argent est directement reçu en argent sale.',
  ]

  const carjack = [
    'Section prête pour le carjack de véhicule.',
    'Le lien de détail n’a pas pu être récupéré correctement pendant cette session, donc garde ce bloc pour y coller les règles exactes si tu les récupères.',
  ]

  const fourgon = [
    'Les braquages de fourgon sont des activités aléatoires lancées par le serveur.',
    'Quand l’alerte apparaît, il faut se rendre à l’endroit indiqué sur la carte.',
    'La LSPD est avertie au bout de 30 secondes.',
    'Sur zone, il faut casser le fourgon en le frappant ou en tirant dessus.',
    'Une fois le fourgon ouvert, les sacs de billets peuvent être récupérés et rapportent de l’argent sale.',
  ]

  const cambriolage = [
    'Chaque joueur peut réaliser un cambriolage par jour.',
    'Le reboot du serveur a lieu tous les jours à 15h.',
    'Pour lancer un cambriolage, il faut un lockpick et un tournevis.',
    'Les maisons cambriolables sont indiquées sur la carte par une petite maison rouge.',
    'Devant la porte, un point permet de commencer le cambriolage.',
    'Le bruit dans la maison peut réveiller un PNJ qui peut tirer et appeler la police.',
    'Le coffre-fort n’apparaît qu’une fois sur deux mais peut rapporter beaucoup d’argent sale.',
    'Le joueur doit voler les objets, les stocker dans le coffre du véhicule et revenir autant que possible avant l’arrivée des forces de l’ordre.',
    'Les objets volés doivent ensuite être revendus au point prévu.',
  ]

const placeholders = {
  acier: [
    "L’activité acier se déroule en 3 étapes : récolte, traitement et vente.",
    "La récolte se fait sur des points spécifiques en appuyant sur E.",
    "Le transport de ressources doit être cohérent (véhicule adapté recommandé).",
    "Le traitement se fait sur un point dédié et transforme la matière brute.",
    "La vente se fait sur un point spécifique pour obtenir de l’argent.",
    "Le farm abusif ou automatisé est strictement interdit.",
    "Toute interaction doit rester RP et cohérente avec la scène.",
  ],

  scierie: [
    "L’activité scierie fonctionne avec un système de récolte de bois.",
    "Le bois doit être transformé avant d’être vendu.",
    "Les véhicules doivent être utilisés de manière cohérente pour transporter les ressources.",
    "Le farming en groupe doit rester réaliste et non abusif.",
    "Les interactions RP doivent être respectées (pas de farm silencieux sans RP).",
  ],

  course: [
    "Les courses doivent être organisées de manière RP.",
    "Les paris doivent rester raisonnables et cohérents.",
    "Le fair-play est obligatoire, toute triche est sanctionnée.",
    "Les courses illégales doivent être encadrées RP (organisation, sécurité).",
    "Les collisions volontaires sont interdites sauf si justifiées RP.",
  ],

  drogues: [
    "Les drogues sont récoltées, traitées puis vendues sur des points spécifiques.",
    "Les points de vente permettent de gagner de l’argent sale.",
    "Les zones peuvent être contrôlées par des groupes.",
    "Les conflits de territoire doivent rester RP et organisés.",
    "Le farming abusif est interdit.",
    "La vente de drogue doit être cohérente avec le RP du personnage.",
  ],

  pacific: [
    "Le braquage Pacific nécessite une organisation préalable.",
    "Un GDOC ou validation staff peut être obligatoire selon le serveur.",
    "Un délai entre deux braquages doit être respecté.",
    "Le nombre de participants doit être cohérent.",
    "Le plan doit être préparé (entrée, sortie, fuite).",
    "Les négociations doivent être jouées RP.",
  ],

  bijouterie: [
    "La bijouterie est un braquage structuré avec plusieurs étapes.",
    "Du matériel est nécessaire (thermite, perceuse, découpe).",
    "Le braquage peut rapporter une grosse somme d’argent sale.",
    "Une intervention LSPD est attendue.",
    "La fuite doit être organisée et cohérente.",
    "Le spam de braquage est interdit.",
  ],

  superettes: [
    "Les supérettes peuvent être braquées avec une arme en main.",
    "Il faut viser le caissier pour lancer le braquage.",
    "Un cooldown est appliqué entre chaque braquage.",
    "Le butin est récupéré sous forme d’argent sale.",
    "Les braquages doivent rester RP et non abusifs.",
  ],

  carjack: [
    "Le carjack consiste à voler un véhicule à un joueur ou PNJ.",
    "Une interaction RP est obligatoire avant le vol.",
    "Le fear RP doit être respecté par la victime.",
    "Le vol doit rester cohérent (pas en pleine foule sans RP).",
    "Les abus de carjack sont sanctionnés.",
  ],

  fourgon: [
    "Les fourgons blindés apparaissent de manière aléatoire.",
    "Une alerte est envoyée aux joueurs.",
    "La LSPD est informée après un court délai.",
    "Le fourgon doit être forcé pour récupérer les sacs.",
    "Les sacs contiennent de l’argent sale.",
    "La scène doit être jouée jusqu’au bout (fuite comprise).",
  ],

  cambriolage: [
    "Un cambriolage peut être réalisé une fois par jour.",
    "Un lockpick et un tournevis sont nécessaires.",
    "Les maisons sont indiquées sur la carte.",
    "Un PNJ peut être présent et alerter la police.",
    "Le coffre peut contenir de l’argent ou des objets.",
    "Les objets doivent être revendus ensuite.",
    "Le bruit peut attirer l’attention, rester discret est conseillé.",
  ],
}

  return (
    <div className="min-h-screen bg-[#05080f] text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-80 shrink-0 border-r border-cyan-500/10 bg-[#060a12] lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto px-5 py-6">
            <div className="mb-6 flex items-center gap-3">
              <img src="/logo.png" alt="Logo Urban Life" className="h-11 w-11 rounded-2xl object-cover ring-1 ring-cyan-400/20" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">Urban Life</p>
                <h1 className="text-sm font-semibold text-white">Règlement complet</h1>
              </div>
            </div>

            <div className="space-y-6">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-slate-500">{group.title}</p>
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

        <main className="flex-1">
          <section
            id="accueil"
            className="border-b border-cyan-500/10 px-4 py-6 sm:px-8 lg:px-12"
          >
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-cyan-400/15 bg-cover bg-center p-8 sm:p-10"
              style={{ backgroundImage: "url('/banner.png')" }}
            >
              <div className="rounded-[24px] bg-black/55 p-6 sm:p-8 backdrop-blur-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-300">
                  Urban Life • Règlement RP
                </div>
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
  RÈGLEMENT URBAN LIFE
</h2>

<p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
  Retrouvez l’ensemble des règles du serveur Urban Life. Toute infraction peut entraîner des sanctions.
</p>
              </div>
            </div>
          </section>

          <section id="legal-home" className="px-4 py-8 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl space-y-6">
              <SectionHeader title="Règlement RP Légal" icon="⚖️" subtitle="Forces de l’ordre, EMS, entreprise et activités légales." />
              <CardGrid cards={legalCards} />
            </div>
          </section>

          <section id="lspd" className="px-4 py-8 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl space-y-6">
              <SectionHeader title="Règlement LSPD / BCSO" icon="👮" subtitle="Règles des forces de l’ordre, fouilles, poursuites, PPA et procédures RP." />
              <div className="grid gap-6 xl:grid-cols-2">
                <RuleCard title="Tenue & service" items={lspd.tenue} />
                <RuleCard title="Interdictions principales" items={lspd.interdits} />
                <RuleCard title="Règles des cadets" items={lspd.cadets} />
                <RuleCard title="Motifs de fouille" items={lspd.fouille} />
                <RuleCard title="Poursuites et PIT" items={lspd.poursuite} />
                <RuleCard title="Contrôles & PPA" items={lspd.ppa} />
                <RuleCard title="Autres règles" items={lspd.autres} />
              </div>
            </div>
          </section>

          <section id="ems" className="px-4 py-8 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl space-y-6">
              <SectionHeader title="Règlement EMS" icon="🚑" subtitle="Service médical, neutralité, interventions et matériel." />
              <RuleCard title="Règles EMS" items={ems} />
            </div>
          </section>

          <section id="entreprise" className="px-4 py-8 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl space-y-6">
              <SectionHeader title="Règlement Entreprise" icon="🏢" subtitle="Patrons, employés, mécanos, concessionnaires et ventes d’occasion." />
              <div className="grid gap-6 lg:grid-cols-2">
                <RuleCard title="Général" items={entreprise.general} />
                <RuleCard title="Mécano" items={entreprise.mecano} />
                <RuleCard title="Concessionnaire" items={entreprise.concessionnaire} />
                <RuleCard title="Occasion" items={entreprise.occasion} />
              </div>
            </div>
          </section>

          <section id="activites-legales" className="px-4 py-8 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl space-y-6">
              <SectionHeader title="Activités légales" icon="🎣" subtitle="Sous-sections prêtes pour pêche, acier, scierie et course." />
              <RuleCard title="Vue d’ensemble" items={legalActivities} />
            </div>
          </section>

          <section id="peche" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Pêche" items={peche} /></div></section>
          <section id="acier" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Acier" items={acier} /></div></section>
          <section id="scierie" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Scierie" items={placeholders.scierie} /></div></section>
          <section id="course" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Course" items={placeholders.course} /></div></section>

          <section id="illegal-home" className="px-4 py-8 sm:px-8 lg:px-12 border-t border-cyan-500/10">
            <div className="mx-auto max-w-6xl space-y-6">
              <SectionHeader title="Règlement RP Illégal" icon="🔫" subtitle="Vue d’ensemble, îles et activités illégales." />
              <CardGrid cards={illegalCards} />
            </div>
          </section>

          <section id="illegal-general" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Règlement illégal" items={illegalGeneral} /></div></section>
          <section id="iles" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Les îles" items={iles} /></div></section>
          <section id="activites-illegales" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Activités illégales" items={activitesIllegales} /></div></section>
          <section id="drogues" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Drogues" items={drogues} /></div></section>
          <section id="pacific" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Braquage Pacific" items={pacific} /></div></section>
          <section id="bijouterie" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Bijouterie" items={bijouterie} /></div></section>
          <section id="supérettes" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Supérettes" items={superettes} /></div></section>
          <section id="carjack" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Carjack" items={carjack} /></div></section>
          <section id="fourgon" className="px-4 py-8 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Fourgon" items={fourgon} /></div></section>
          <section id="cambriolage" className="px-4 py-8 pb-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-6xl"><RuleCard title="Cambriolage" items={cambriolage} /></div></section>
        </main>
      </div>
    </div>
  )
}

function SectionHeader({ title, subtitle, icon }) {
  return (
    <div className="rounded-2xl border border-cyan-500/10 bg-[#08111d] p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl ring-1 ring-cyan-400/20">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
          <p className="mt-1 text-sm text-slate-400 sm:text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

function CardGrid({ cards }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <a
          key={card.href}
          href={card.href}
          className="group rounded-2xl border border-cyan-400/15 bg-[#08101c]/90 px-5 py-4 transition hover:border-cyan-300/30 hover:bg-[#0b1524]"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{card.icon}</span>
              <span className="font-medium text-white">{card.title}</span>
            </div>
            <span className="text-cyan-300 transition group-hover:translate-x-1">→</span>
          </div>
        </a>
      ))}
    </div>
  )
}

function RuleCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0d1624]/80 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <div className="mt-4 space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
            <span className="mt-1 text-cyan-300">•</span>
            <p className="text-sm leading-6 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
