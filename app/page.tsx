// Asset URLs from Figma (valid for 7 days from generation)
const navLogoUrl =
  "https://www.figma.com/api/mcp/asset/9deaa411-d7a2-4ce0-803e-1b60fa0d2c12";
const heroBgUrl =
  "https://www.figma.com/api/mcp/asset/3cb6abf8-b5b7-4328-9a92-31422e57504d";
const heroLineMoverUrl =
  "https://www.figma.com/api/mcp/asset/05d53fe3-46ba-478c-afe4-e22d22879072";
const heroSubtractUrl =
  "https://www.figma.com/api/mcp/asset/0ace8e4a-e516-46a9-838a-a95b00bc0b41";
const heroArrowUrl =
  "https://www.figma.com/api/mcp/asset/b631a39d-e940-4d5c-b44f-e480c7a19eff";
const ojkLogoUrl =
  "https://www.figma.com/api/mcp/asset/de37e5cf-44bc-4d8c-b26c-103f5f5afb5e";

// Feature section photo overlays
const f1PhotoUrl =
  "https://www.figma.com/api/mcp/asset/ac28182f-b4d9-4e58-86d8-5fde0a13d732";
const f2PhotoUrl =
  "https://www.figma.com/api/mcp/asset/19ccb1c8-0b70-4945-baf7-c47ccd6c0b9e";
const f3PhotoUrl =
  "https://www.figma.com/api/mcp/asset/6552e88a-4502-4d44-a8fd-5cdaa755972f";

// Feature section grid backgrounds
const f2GridUrl =
  "https://www.figma.com/api/mcp/asset/282d2c89-c5d1-46ba-a7ce-70bae1354d61";
const f3GridUrl =
  "https://www.figma.com/api/mcp/asset/f57dea5f-990d-4855-a9a5-cd3b8f4458f8";

// Feature section icons
const iconHub =
  "https://www.figma.com/api/mcp/asset/16ffa618-4fa5-41eb-ba23-88e77f2f50c3";
const iconDiversify =
  "https://www.figma.com/api/mcp/asset/998757c3-e6d4-4315-bca4-30091adab8f6";
const iconShield =
  "https://www.figma.com/api/mcp/asset/1133677b-b42e-460f-93c4-7dcd950e42b6";
const iconResearch =
  "https://www.figma.com/api/mcp/asset/9dc25e4a-fa9a-4913-bc2b-afec7accb845";
const iconChart =
  "https://www.figma.com/api/mcp/asset/459fb2bb-51b2-4c3d-83b6-23d1dd1aa8cb";
const iconDca =
  "https://www.figma.com/api/mcp/asset/bbde3941-1802-4426-baf1-6f521e2ec221";
const iconSupervisor =
  "https://www.figma.com/api/mcp/asset/a1e4a917-5833-4bd6-a9e5-b5d2cbaf0fa7";
const iconChartQuery =
  "https://www.figma.com/api/mcp/asset/28856f08-054c-4c49-a60c-1087eba7e3bf";
const iconSupport =
  "https://www.figma.com/api/mcp/asset/76c61e13-e3d2-4c42-9157-bd3ec9f4ea33";

// Investor cards
const invCard1BgUrl =
  "https://www.figma.com/api/mcp/asset/fe20ffab-1b28-4088-aca3-9b3ce410fca0";
const invCard2BgUrl =
  "https://www.figma.com/api/mcp/asset/ac526c0b-504d-40d8-a832-249c5cec837a";
const invCard3BgUrl =
  "https://www.figma.com/api/mcp/asset/4c866888-3586-44d6-84ad-230e83283ee3";
const invContentSwirlUrl =
  "https://www.figma.com/api/mcp/asset/f6944563-b30a-48fb-bd5e-ebe463898e40";
const invIcon1Url =
  "https://www.figma.com/api/mcp/asset/ddbf0bef-f414-43b7-a6b4-bd388e655cad";
const invIcon2Url =
  "https://www.figma.com/api/mcp/asset/99273cea-73e1-4f0d-a410-35d26291e4e0";
const invIcon3Url =
  "https://www.figma.com/api/mcp/asset/000d4c4b-5afa-4d87-bf13-633ba00173eb";

// Partner logos
const partnerIndodaxUrl =
  "https://www.figma.com/api/mcp/asset/34d5edfa-a0db-46ca-b658-1efc0d2af6ca";
const partnerBmoneyUrl =
  "https://www.figma.com/api/mcp/asset/730bf595-778f-4730-a9ec-aef197631474";
const partnerIdrxUrl =
  "https://www.figma.com/api/mcp/asset/accab5f6-bc55-4bd4-958b-5360e0b7d5b3";
const partnerAmarthaUrl =
  "https://www.figma.com/api/mcp/asset/de36e2bf-dbcb-43f2-802c-184b7bf5dacc";

// Footer
const footerLogoUrl =
  "https://www.figma.com/api/mcp/asset/8a1310e1-92ef-4609-bc9f-5a72417c8eb1";
const footerBgUrl =
  "https://www.figma.com/api/mcp/asset/fa32b373-007a-4646-a8a8-8fbc6c0ff717";
const footerOjkUrl =
  "https://www.figma.com/api/mcp/asset/a6010ca0-717e-4a85-a984-cdaa6408db71";

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium text-white whitespace-nowrap bg-warning">
      {children}
    </span>
  );
}

function BlueIcon({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="relative shrink-0 w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-secondary-600">
      <img src={src} alt={alt} className="w-6 h-6 object-contain" />
    </div>
  );
}

function FrameIcon({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="relative shrink-0 w-10 h-10">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 items-start">
      {icon}
      <div>
        <p className="text-base font-medium leading-6 text-text-highlighted">{title}</p>
        <p className="text-base leading-6 font-normal text-text-toned">{desc}</p>
      </div>
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex items-center gap-4 px-20 py-6 border-b border-ui-border backdrop-blur-[10px] bg-white/90">
      <div className="flex flex-1 items-center">
        <img src={navLogoUrl} alt="CAMP Investment" className="h-8 w-auto" />
      </div>

      <div className="flex gap-8 items-center">
        <span className="p-1 text-sm font-bold border-b-2 text-primary border-primary">
          Beranda
        </span>
        {["Layanan", "Keamanan", "Tentang Kami", "Hubungi Kami"].map((label) => (
          <a key={label} href="#" className="p-1 text-sm font-medium text-text-highlighted">
            {label}
          </a>
        ))}
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <button className="w-33 px-3 py-2 text-sm font-medium border text-secondary border-secondary-700/50">
          Masuk
        </button>
        <button className="w-33 px-3 py-2 text-sm font-medium text-white bg-secondary">
          Daftar
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden h-[635px] bg-primary-50">
      {/* Blurred background photo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBgUrl}
          alt=""
          className="absolute max-w-none pointer-events-none blur-[12px] w-[185%] h-[186%] -left-[25.75%] -top-[33.39%]"
        />
        <div className="absolute inset-0 bg-[rgba(134,115,100,0.85)]" />
      </div>

      {/* Left warm gradient overlay */}
      <div
        className="absolute left-0 top-0 h-full w-[621px] border-r border-white/25 backdrop-blur-[3px]"
        style={{ background: "linear-gradient(to right, rgba(134,115,100,0.95), rgba(134,115,100,0.75))" }}
      />

      {/* Decorative line pattern overlay */}
      <img
        src={heroLineMoverUrl}
        alt=""
        className="absolute left-0 top-0 h-full w-[622px] object-cover pointer-events-none"
      />

      {/* Subtract mask shape */}
      <img
        src={heroSubtractUrl}
        alt=""
        className="absolute top-0 h-full left-[407px] pointer-events-none"
      />

      {/* Right narrow overlay */}
      <div
        className="absolute right-0 top-0 h-full w-19 border-l border-white/25"
        style={{ background: "linear-gradient(to left, rgba(134,115,100,0.95), rgba(134,115,100,0.75))" }}
      />

      {/* Text content */}
      <div className="absolute flex flex-col gap-4 items-start left-[77px] bottom-[125px] w-[740px]">
        <h1 className="font-semibold text-white text-5xl leading-12">
          Semua Investasi Anda
          <br />
          Dalam Satu Platform
        </h1>
        <p className="text-white text-lg leading-7 w-[557px]">
          Platform terintegrasi untuk nasabah <em>high net worth</em> dan
          institutional untuk investasi digital maupun tradisional
        </p>
        <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-secondary">
          Mulai Investasi
          <img src={heroArrowUrl} alt="" className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

// ─── OJK Section ──────────────────────────────────────────────────────────────

function OjkSection() {
  return (
    <section className="py-10 bg-primary-50">
      <div className="mx-auto max-w-[1280px] flex flex-col items-center gap-6 rounded-xl p-6 bg-white shadow-lg">
        <p className="text-base font-medium text-center text-text-highlighted">
          CAMP Investment berizin dan diawasi oleh
        </p>
        <img src={ojkLogoUrl} alt="OJK – Otoritas Jasa Keuangan" className="h-16 w-auto" />
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────

function FeatureBlock({
  photoSide,
  photoUrl,
  gridUrl,
  badge,
  heading,
  description,
  features,
}: {
  photoSide: "left" | "right";
  photoUrl: string;
  gridUrl?: string;
  badge: string;
  heading: React.ReactNode;
  description: string;
  features: { icon: React.ReactNode; title: string; desc: string }[];
}) {
  const photo = (
    <div className="relative shrink-0 w-145 min-h-154.5 overflow-hidden rounded-xl">
      {gridUrl && (
        <img
          src={gridUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}
      <img
        src={photoUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Gradient fade toward content */}
      <div
        className={`absolute inset-y-0 w-32 pointer-events-none ${
          photoSide === "left"
            ? "right-0 bg-linear-to-r from-transparent to-primary-50"
            : "left-0 bg-linear-to-l from-transparent to-primary-50"
        }`}
      />
    </div>
  );

  const content = (
    <div
      className={`flex flex-col gap-10 flex-1 py-12 min-w-0 ${
        photoSide === "left" ? "pl-8" : "pr-8"
      }`}
    >
      <div className="flex flex-col gap-9">
        <Badge>{badge}</Badge>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[40px] leading-12 text-text-highlighted">
            {heading}
          </h2>
          <p className="text-base leading-6 text-text-highlighted font-normal">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-6 rounded-xl bg-secondary-200">
        {features.map((f, i) => (
          <FeatureItem key={i} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex items-stretch gap-0 overflow-hidden rounded-xl bg-primary-50 min-h-154.5">
      {photoSide === "left" ? (
        <>
          {photo}
          {content}
        </>
      ) : (
        <>
          {content}
          {photo}
        </>
      )}
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="mx-auto flex flex-col gap-16 px-20 max-w-360">
        <FeatureBlock
          photoSide="left"
          photoUrl={f1PhotoUrl}
          badge="Instrumen Terpilih dalam Satu Platform"
          heading="Portfolio Terkurasi, Satu Akses Terintegrasi"
          description="Nikmati kemudahan mengelola berbagai instrumen investasi dari satu platform. Mulai dari aset digital utama, reksa dana, hingga obligasi — semuanya dikurasi berdasarkan kualitas, kredibilitas, dan kepatuhan terhadap standar regulator"
          features={[
            {
              icon: <BlueIcon src={iconHub} />,
              title: "Seluruh Produk dalam Satu Akses",
              desc: "Aset digital, reksa dana, saham, dan pendapatan tetap dalam satu ekosistem investasi termasuk kemampuan membandingkan harga aset digital dari lebih dari satu exchange secara instan",
            },
            {
              icon: <BlueIcon src={iconDiversify} />,
              title: "Diversifikasi Terkelola",
              desc: "Rancang portofolio seimbang antara potensi pertumbuhan dan stabilitas hasil",
            },
            {
              icon: <BlueIcon src={iconShield} />,
              title: "Akses Teregulasi & Aman",
              desc: "Semua transaksi melalui mitra berlisensi OJK untuk menjaga keamanan investasi Anda",
            },
          ]}
        />

        <FeatureBlock
          photoSide="right"
          photoUrl={f2PhotoUrl}
          gridUrl={f2GridUrl}
          badge="Investasi Dengan Keyakinan"
          heading="Wawasan & Analisis Pasar yang Terkurasi"
          description="Riset mendalam dan panduan strategis seputar pasar keuangan dan aset digital. CAMP menghadirkan insight makroekonomi, tren regulasi, serta peluang aset baru yang dikurasi khusus bagi nasabah institusi dan premium — tersedia melalui Relationship Manager pribadi, buletin eksklusif, dan laporan berkala"
          features={[
            {
              icon: <BlueIcon src={iconResearch} />,
              title: "Riset & Insight Profesional",
              desc: "Analisis pasar komprehensif dari tim riset dan mitra lembaga keuangan berpengalaman",
            },
            {
              icon: <BlueIcon src={iconChart} />,
              title: "Pemantauan & Simulasi Portofolio",
              desc: "Akses pelacakan real time dan simulasi strategi untuk keputusan yang lebih terukur",
            },
            {
              icon: <FrameIcon src={iconDca} />,
              title: "Perencanaan Investasi Otomatis (DCA)",
              desc: "Fitur akumulasi aset terjadwal untuk strategi investasi jangka panjang yang konsisten",
            },
          ]}
        />

        <FeatureBlock
          photoSide="left"
          photoUrl={f3PhotoUrl}
          gridUrl={f3GridUrl}
          badge="Pendampingan Pribadi"
          heading="Dukungan Eksklusif dari Penasihat Berpengalaman"
          description="Rasakan layanan personal yang dirancang untuk membantu Anda membuat keputusan investasi yang lebih tepat. Setiap nasabah mendapat dukungan Relationship Manager dan akses ke penasihat profesional berlisensi yang memahami tujuan dan profil risiko Anda"
          features={[
            {
              icon: <BlueIcon src={iconSupervisor} />,
              title: "Pendampingan Investasi Pribadi",
              desc: "Pilih berinvestasi secara mandiri atau bersama penasihat profesional dari CAMP maupun mitra",
            },
            {
              icon: <FrameIcon src={iconChartQuery} />,
              title: "Konsultasi Berbasis Data",
              desc: "Keputusan investasi didukung analisis dan laporan kinerja yang transparan",
            },
            {
              icon: <BlueIcon src={iconSupport} />,
              title: "Layanan Premium & Responsif",
              desc: "Tim dedikasi siap memberikan solusi cepat untuk kebutuhan investasi Anda",
            },
          ]}
        />
      </div>
    </section>
  );
}

// ─── Investor Cards Section ────────────────────────────────────────────────────

function InvestorCard({
  bgUrl,
  iconUrl,
  title,
  description,
  contentSide,
}: {
  bgUrl: string;
  iconUrl: string;
  title: string;
  description: string;
  contentSide: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-ui-border h-131">
      {/* Background photo */}
      <img
        src={bgUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Dark content panel */}
      <div
        className={`absolute flex flex-col justify-between overflow-hidden rounded-xl top-5 bottom-5 w-100 p-10 bg-bg-inverted/90 backdrop-blur-[10px] ${
          contentSide === "left" ? "left-5" : "right-5"
        }`}
      >
        {/* Swirl decoration */}
        <img
          src={invContentSwirlUrl}
          alt=""
          className="absolute pointer-events-none left-17.5 -top-[30%] w-110 h-110 opacity-12"
        />

        {/* Icon + title */}
        <div className="relative flex flex-col gap-5">
          <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center shrink-0 bg-secondary-600">
            <img src={iconUrl} alt="" className="w-9 h-9 object-contain" />
          </div>
          <h3 className="font-semibold text-white text-3xl leading-9">{title}</h3>
        </div>

        {/* Description */}
        <p className="relative text-white text-sm leading-5 font-normal">{description}</p>
      </div>
    </div>
  );
}

function InvestorSection() {
  return (
    <section className="py-20 border-t border-ui-border bg-primary-50">
      <div className="mx-auto px-20 max-w-360">
        {/* Section header */}
        <div className="flex flex-col items-center gap-5 mb-16">
          <Badge>Dirancang Untuk Investors</Badge>
          <h2 className="text-center font-medium text-4xl leading-10 text-text-highlighted">
            Layanan Menjamin
            <br />
            <span className="text-primary font-semibold">Kemudahan Investasi</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <InvestorCard
            bgUrl={invCard1BgUrl}
            iconUrl={invIcon1Url}
            title="Investor Korporat & Profesional"
            description="CAMP menyediakan infrastruktur investasi bagi entitas korporat, grup usaha, dan manajer investasi profesional yang membutuhkan fleksibilitas pengelolaan lintas entitas. Melalui fitur institutional sub-account solution, setiap entitas atau portofolio dapat dikelola secara terpisah namun tetap terintegrasi dalam satu platform - memudahkan alokasi, otorisasi, dan pelaporan konsolidasi secara real-time, dengan standar keamanan dan kepatuhan tertinggi."
            contentSide="left"
          />
          <InvestorCard
            bgUrl={invCard2BgUrl}
            iconUrl={invIcon2Url}
            title="Lembaga Keuangan"
            description="Akses Aman ke Ekosistem Investasi Terpadu CAMP menghadirkan solusi investasi terintegrasi bagi lembaga keuangan yang ingin memperluas jangkauan layanan dan diversifikasi portofolio. Melalui infrastruktur berlisensi, kontrol risiko, dan insight pasar komprehensif, setiap transaksi dijalankan dengan transparansi dan kepatuhan penuh terhadap regulasi"
            contentSide="right"
          />
          <InvestorCard
            bgUrl={invCard3BgUrl}
            iconUrl={invIcon3Url}
            title="Investor Individu Bernilai Tinggi (HNW)"
            description="Strategi Eksklusif untuk Pertumbuhan dan Perlindungan Aset Dirancang bagi individu dengan orientasi jangka panjang, CAMP menyediakan kurasi aset, strategi akumulasi otomatis, dan dukungan Relationship Manager pribadi. Semua difokuskan untuk membantu Anda menumbuhkan dan melindungi kekayaan dengan presisi dan kendali penuh"
            contentSide="left"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Partners Section ─────────────────────────────────────────────────────────

function PartnersSection() {
  const logos = [
    { src: partnerIndodaxUrl, alt: "INDODAX", width: 160 },
    { src: partnerBmoneyUrl, alt: "bmoney", width: 130 },
    { src: partnerIdrxUrl, alt: "IDRX", width: 100 },
    { src: partnerAmarthaUrl, alt: "amartha", width: 130 },
  ];

  return (
    <section className="border-t border-ui-border py-16 bg-primary-50">
      <div className="mx-auto px-20 max-w-360">
        <div className="relative overflow-hidden rounded-xl py-6 bg-white">
          <p className="text-base font-medium text-center mb-6 text-text-highlighted">
            Mitra Kepercayaan
          </p>
          <div className="flex items-center justify-center gap-16 px-12 flex-wrap">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
                style={{ width: logo.width }}
              />
            ))}
          </div>
          {/* Fade-out left */}
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-linear-to-r from-white to-transparent" />
          {/* Fade-out right */}
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-linear-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="flex flex-col gap-20 pt-5 pb-10 px-14 bg-primary-50">
      {/* CTA Card */}
      <div className="relative overflow-hidden rounded-xl px-10 py-8 bg-secondary-600">
        {/* Background photo */}
        <img
          src={footerBgUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(102.62deg, #798360 54.337%, rgba(121,131,96,0) 100.01%)",
          }}
        />

        <div className="relative flex flex-col gap-5 max-w-xl">
          <Badge>Investasi Lebih Mudah</Badge>
          <h2 className="font-medium text-white text-4xl leading-10">
            Satu Platform Untuk
            <br />
            Semua Investasi
          </h2>
          <button className="self-start px-3 py-2 text-base font-medium text-white bg-secondary">
            Daftar Sekarang
          </button>
        </div>
      </div>

      {/* Dark bottom */}
      <div className="rounded-xl flex flex-col gap-10 px-10 pt-10 pb-8 -mx-14 -mb-10 bg-bg-inverted">
        {/* Logo + links */}
        <div className="flex items-start justify-between">
          <img src={footerLogoUrl} alt="CAMP Investment" className="h-25 w-auto" />

          <div className="flex gap-5">
            <div className="flex flex-col gap-5 w-49.25">
              {["Layanan", "Tentang Kami", "Keamanan", "Hubungi Kami"].map((link) => (
                <a key={link} href="#" className="text-sm font-semibold text-white leading-5">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5 w-49.25">
              {["Syarat & Ketentuan", "Kebijakan Privasi"].map((link) => (
                <a key={link} href="#" className="text-sm font-semibold text-white leading-5">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Copyright + OJK */}
        <div className="flex items-end justify-between">
          <p className="text-xs text-white leading-4 max-w-[305px] font-normal">
            Hak Cipta © 2025. PT Cipta Andalan Manajemen Prima. Hak Cipta
            Dilindungi Undang-Undang
          </p>
          <div className="flex items-center justify-center overflow-hidden rounded p-3 bg-white">
            <img src={footerOjkUrl} alt="OJK" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <OjkSection />
        <FeaturesSection />
        <InvestorSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
