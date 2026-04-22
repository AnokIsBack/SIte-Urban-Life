import { motion } from "framer-motion";

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
  { href: "#lspd", title: "Règlement LSPD / BCSO", icon: "👮" },
  { href: "#ems", title: "Règlement EMS", icon: "🚑" },
  { href: "#entreprise", title: "Règlement Entreprise", icon: "🏢" },
  { href: "#activites-legales", title: "Activités légales", icon: "🎣" },
];

const illegalCards = [
  { href: "#illegal-general", title: "Règlement Illégal", icon: "⚠️" },
  { href: "#iles", title: "Les îles", icon: "🏝️" },
  { href: "#activites-illegales", title: "Activités illégales", icon: "💀" },
];

const lspd = {
  tenue: [
    "Les tenues et véhicules LSPD / BCSO sont obligatoires en service.",
    "En civil, un signe distinctif clair doit montrer l’appartenance aux forces de l’ordre.",
  ],
  interdits: [
    "Interdiction de revenir au poste en pleine scène.",
    "Interdiction de contrôler une personne sans être en service ou sans signe distinctif clair.",
    "Interdiction d’utiliser les armes de service hors service.",
    "Interdiction absolue de vendre une arme LSPD / BCSO.",
    "Interdiction de confisquer un citoyen déjà au sol.",
    "Interdiction de laisser un individu trop longtemps en cellule sans contexte RP solide.",
    "Interdiction d’incarner un policier corrompu sans autorisation staff.",
    "Interdiction de garder des armes saisies pour usage personnel.",
    "Interdiction d’utiliser des armes illégales en tant qu’agent.",
  ],
  cadets: [
    "Les cadets doivent respecter le fear RP.",
    "Les cadets ne peuvent pas avoir de casier judiciaire.",
    "Les cadets ne peuvent pas patrouiller seuls.",
  ],
  fouille: [
    "Une fouille doit toujours reposer sur un motif RP valable.",
    "Des motifs courants existent : visage dissimulé, holster visible, gilet pare-balles, attitude menaçante, montée dans un véhicule de police.",
    "Un simple délit de fuite ne justifie pas automatiquement une fouille complète.",
  ],
  poursuite: [
    "Les pneus d’un véhicule en poursuite peuvent être visés si la situation devient réellement dangereuse.",
    "Le PIT est encadré et ne doit jamais être utilisé de manière abusive.",
    "Les poursuites doivent rester cohérentes et proportionnées à la scène.",
  ],
  ppa: [
    "Avec sac mais sans PPA : confiscation possible des armes légères et lourdes.",
    "Avec sac et avec PPA : pas de confiscation lors d’un contrôle routinier classique.",
    "Sans sac et sans PPA : confiscation possible des armes légères.",
    "Sans sac et avec PPA : pas de confiscation lors d’un contrôle routinier classique.",
    "Si un citoyen ouvre le feu en ville, l’arme utilisée peut être confisquée.",
  ],
  autres: [
    "Les agents doivent rester professionnels et éviter l’abus de pouvoir.",
    "Les indics passent par les hauts gradés.",
    "Le rapport de force doit rester cohérent.",
    "Les permis et PPA doivent être vérifiés de manière RP.",
  ],
};

const ems = [
  "Interdiction d’utiliser son service EMS pour participer à de l’illégal.",
  "Interdiction d’intervenir sur une scène illégale pendant les tirs.",
  "La tenue de service est obligatoire.",
  "Le protocole d’intervention doit être respecté.",
  "En fin de service, le matériel doit être rangé dans le coffre de l’entreprise.",
];

const entreprise = {
  general: [
    "Interdiction d’utiliser le coffre entreprise à des fins personnelles.",
    "Interdiction de vendre ou donner son entreprise sans procédure adaptée.",
    "Interdiction de cumuler plusieurs emplois légaux si le règlement du serveur le prohibe.",
    "Le vol dans le coffre entreprise est interdit.",
  ],
  mecano: [
    "Interdiction d’ajouter des équipements incohérents à un véhicule.",
    "Interdiction de mettre un véhicule en fourrière sans raison ou sans autorisation adaptée.",
    "Interdiction de déverrouiller un véhicule sans demande claire du propriétaire.",
  ],
  concessionnaire: [
    "Interdiction d’offrir un véhicule gratuitement sans procédure ou autorisation.",
    "Toute acquisition doit être cohérente et payée.",
  ],
};

const legalActivities = [
  "La section légale inclut plusieurs activités accessibles côté civil.",
  "Exemples visibles depuis la navigation : pêche, Boucheron , Mine",
  "Chaque activité doit être jouée proprement, sans abus de farm ni détournement HRP.",
];

const peche = [
  "Pour commencer, il faut acheter une canne à pêche dans les LTD de la ville.",
  "La canne en bois est vendue dans tout les Ltd pour 250 000 $.",
  "La canne en aluminium est vendue dans tout les Ltd pour 900 000 $.",
  "La canne Urban est vendue dans tout les Ltd pour 1 200 000 $.",
];

const boucheron = [
  "L’activité scierie fonctionne avec un système de récolte de bois.",
  "Le bois doit être transformé avant d’être vendu.",
  "Les véhicules doivent être utilisés de manière cohérente pour transporter les ressources.",
  "Le farming en groupe doit rester réaliste et non abusif.",
];

const illegalGeneral = [
  "Toute scène commencée doit être jouée jusqu’à son terme.",
  "En cas de problème, il faut terminer la scène puis faire un ticket ou un report.",
  "Le fear RP doit être joué obligatoirement.",
  "Les sommations se font avec 1 balles en l’air, hors véhicule et sans silencieux.",
];

const iles = [
  "La LSPD / BCSO ne peut pas se rendre sur Cayo.",
  "Les EMS sont autorisés à entrer sur Cayo sur présentation de leur carte.",
];

const activitesIllegales = [
  "La section activités illégales regroupe les drogues, le braquage Pacific, la bijouterie, les supérettes, le carjack, le fourgon et le cambriolage.",
  "Chaque activité a ses propres conditions de lancement et de déroulement.",
];

const drogues = [
  "Les points de drogue et points de vente sont centraux dans l’économie illégale.",
  "Posséder ou revendiquer une zone passe par la vente de drogue sur cette zone.",
];

const pacific = [
  "Le braquage Pacific n’est disponible qu’avec GDOC préalable.",
  "Sans GDOC, le braquage ne peut pas être lancé.",
  "Un délai entre deux braquages doit être respecté.",
];

const bijouterie = [
  "La bijouterie peut rapporter une grosse somme d’argent sale si toutes les étapes sont réussies.",
  "Après le braquage, l’équipe doit encore gérer la fuite et la pression policière.",
];

const superettes = [
  "Chaque supérette peut être braquée selon un délai de récupération.",
  "Le braquage se lance en entrant avec une arme en main et en visant le caissier.",
  "Le butin est récupéré sous forme d’argent sale.",
];

const carjack = [
  "Le carjack consiste à voler un véhicule à un joueur ou à un PNJ.",
  "Une interaction RP est obligatoire avant le vol.",
  "Le fear RP doit être respecté par la victime.",
];

const fourgon = [
  "Les braquages de fourgon sont des activités aléatoires lancées par le serveur.",
  "La LSPD est avertie après un court délai.",
  "Une fois le fourgon ouvert, les sacs de billets peuvent être récupérés.",
];

const cambriolage = [
  "Chaque joueur peut réaliser un cambriolage par jour.",
  "Le bruit peut réveiller un PNJ qui peut appeler la police.",
  "Les objets volés doivent ensuite être revendus au point prévu.",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#04070d] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-80 shrink-0 border-r border-cyan-500/10 bg-[#050a14] lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto p-6">
            <div className="mb-8 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo Urban Life"
                className="h-12 w-12 rounded-2xl object-cover shadow-lg ring-1 ring-cyan-400/20"
              />
              <div>
                <h1 className="text-lg font-bold text-cyan-300">Urban Life</h1>
                <p className="text-xs text-slate-400">Règlement complet</p>
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

        <main className="flex-1 p-4 sm:p-8">
          <motion.section
            id="accueil"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 overflow-hidden rounded-3xl border border-cyan-400/20 shadow-2xl"
            style={{ backgroundImage: "url('/banner.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
            <div className="relative p-8 sm:p-10 lg:p-14">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-300">
                Urban Life • Règlement RP
              </div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                RÈGLEMENT URBAN LIFE
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Retrouvez l’ensemble des règles du serveur Urban Life. Toute infraction
                peut entraîner des sanctions.
              </p>
            </div>
          </motion.section>

          <section id="legal-home" className="mb-8 space-y-6">
            <SectionHeader
              title="Règlement RP Légal"
              subtitle="Forces de l’ordre, EMS, entreprise et activités légales."
              icon="⚖️"
            />
            <CardGrid cards={legalCards} />
          </section>

          <section id="lspd" className="mb-8 space-y-6">
            <SectionHeader
              title="Règlement LSPD / BCSO"
              subtitle="Règles des forces de l’ordre, fouilles, poursuites, PPA et procédures RP."
              icon="👮"
            />
            <div className="grid gap-6 xl:grid-cols-2">
              <RuleCard title="Tenue & service" items={lspd.tenue} />
              <RuleCard title="Interdictions principales" items={lspd.interdits} />
              <RuleCard title="Règles des cadets" items={lspd.cadets} />
              <RuleCard title="Motifs de fouille" items={lspd.fouille} />
              <RuleCard title="Poursuites et PIT" items={lspd.poursuite} />
              <RuleCard title="Contrôles & PPA" items={lspd.ppa} />
              <RuleCard title="Autres règles" items={lspd.autres} />
            </div>
          </section>

          <section id="ems" className="mb-8 space-y-6">
            <SectionHeader
              title="Règlement EMS"
              subtitle="Service médical, neutralité, interventions et matériel."
              icon="🚑"
            />
            <RuleCard title="Règles EMS" items={ems} />
          </section>

          <section id="entreprise" className="mb-8 space-y-6">
            <SectionHeader
              title="Règlement Entreprise"
              subtitle="Patrons, employés, mécanos, concessionnaires et ventes d’occasion."
              icon="🏢"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <RuleCard title="Général" items={entreprise.general} />
              <RuleCard title="Mécano" items={entreprise.mecano} />
              <RuleCard title="Concessionnaire" items={entreprise.concessionnaire} />
              <RuleCard title="Occasion" items={entreprise.occasion} />
            </div>
          </section>

          <section id="activites-legales" className="mb-8 space-y-6">
            <SectionHeader
              title="Activités légales"
              subtitle="Sous-sections pour pêche, acier, scierie et course."
              icon="🎣"
            />
            <RuleCard title="Vue d’ensemble" items={legalActivities} />
          </section>

          <section id="peche" className="mb-8">
            <RuleCard title="Pêche" items={peche} />
          </section>

          <section id="scierie" className="mb-8">
            <RuleCard title="Scierie" items={scierie} />
          </section>

          <section id="course" className="mb-8">
            <RuleCard title="Course" items={course} />
          </section>

          <section id="illegal-home" className="mb-8 space-y-6 border-t border-cyan-500/10 pt-8">
            <SectionHeader
              title="Règlement RP Illégal"
              subtitle="Vue d’ensemble, îles et activités illégales."
              icon="🔫"
            />
            <CardGrid cards={illegalCards} />
          </section>

          <section id="illegal-general" className="mb-8">
            <RuleCard title="Règlement illégal" items={illegalGeneral} />
          </section>

          <section id="iles" className="mb-8">
            <RuleCard title="Les îles" items={iles} />
          </section>

          <section id="activites-illegales" className="mb-8">
            <RuleCard title="Activités illégales" items={activitesIllegales} />
          </section>

          <section id="drogues" className="mb-8">
            <RuleCard title="Drogues" items={drogues} />
          </section>

          <section id="pacific" className="mb-8">
            <RuleCard title="Braquage Pacific" items={pacific} />
          </section>

          <section id="bijouterie" className="mb-8">
            <RuleCard title="Bijouterie" items={bijouterie} />
          </section>

          <section id="superettes" className="mb-8">
            <RuleCard title="Supérettes" items={superettes} />
          </section>

          <section id="carjack" className="mb-8">
            <RuleCard title="Carjack" items={carjack} />
          </section>

          <section id="fourgon" className="mb-8">
            <RuleCard title="Fourgon" items={fourgon} />
          </section>

          <section id="cambriolage" className="pb-10">
            <RuleCard title="Cambriolage" items={cambriolage} />
          </section>
        </main>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-cyan-500/10 bg-[#08111d] p-6 shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl ring-1 ring-cyan-400/20">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
          <p className="mt-1 text-sm text-slate-400 sm:text-base">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CardGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <motion.a
          key={card.href}
          href={card.href}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: index * 0.04 }}
          className="rounded-2xl border border-cyan-400/15 bg-[#0b1322] p-5 shadow-xl transition hover:border-cyan-400/30"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{card.icon}</span>
              <span className="font-medium text-white">{card.title}</span>
            </div>
            <span className="text-cyan-300">→</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

function RuleCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-cyan-500/20 bg-[#0d1624]/90 p-6 shadow-xl"
    >
      <h4 className="text-lg font-semibold text-cyan-300">{title}</h4>
      <div className="mt-4 space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
          >
            <span className="mt-1 text-cyan-300">•</span>
            <p className="text-sm leading-6 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
