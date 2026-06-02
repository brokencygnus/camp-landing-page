import React from "react";

// ─── Asset URLs ───────────────────────────────────────────────────────────────

// Shared (reused from Beranda)
const navLogoUrl =
  "https://www.figma.com/api/mcp/asset/9deaa411-d7a2-4ce0-803e-1b60fa0d2c12";
const footerLogoUrl =
  "https://www.figma.com/api/mcp/asset/8a1310e1-92ef-4609-bc9f-5a72417c8eb1";
const footerBgUrl =
  "https://www.figma.com/api/mcp/asset/fa32b373-007a-4646-a8a8-8fbc6c0ff717";
const footerOjkUrl =
  "https://www.figma.com/api/mcp/asset/a6010ca0-717e-4a85-a984-cdaa6408db71";
const partnerIndodaxUrl =
  "https://www.figma.com/api/mcp/asset/34d5edfa-a0db-46ca-b658-1efc0d2af6ca";
const partnerBmoneyUrl =
  "https://www.figma.com/api/mcp/asset/730bf595-778f-4730-a9ec-aef197631474";
const partnerIdrxUrl =
  "https://www.figma.com/api/mcp/asset/accab5f6-bc55-4bd4-958b-5360e0b7d5b3";
const partnerAmarthaUrl =
  "https://www.figma.com/api/mcp/asset/de36e2bf-dbcb-43f2-802c-184b7bf5dacc";

// Hero
const heroBgUrl =
  "https://www.figma.com/api/mcp/asset/0f2053da-81af-4902-a5be-0f3a894ba45b";
const heroArrowUrl =
  "https://www.figma.com/api/mcp/asset/c074dd2b-89c6-462c-92bd-3b4beea1642b";
const card1IconUrl =
  "https://www.figma.com/api/mcp/asset/448ff369-ea8d-4e0a-87d8-7aa81cfac9bd";
const card2IconUrl =
  "https://www.figma.com/api/mcp/asset/04504740-4fb8-4042-ace4-87427ed65133";
const card3IconUrl =
  "https://www.figma.com/api/mcp/asset/e58d29a9-1f61-4d1f-b9c1-73dfbb112642";

// Keunggulan section
const keunggulanBgUrl =
  "https://www.figma.com/api/mcp/asset/1e60f523-130c-4f99-a4f2-edf5c0177afc";
const iconBgCircleUrl =
  "https://www.figma.com/api/mcp/asset/963cdbdb-9be2-4094-89bf-5dec0def2bf8";
const f1IconUrl =
  "https://www.figma.com/api/mcp/asset/c4a9feca-12bf-423c-bb02-46d4b311fb06";
const f1ContentImageUrl =
  "https://www.figma.com/api/mcp/asset/053c7737-4f85-46b0-9efe-43d630e3c483";
const f1EllipseUrl =
  "https://www.figma.com/api/mcp/asset/c836b6fe-ca30-47be-961f-a8874f3a18d3";
const f1VectorUrl =
  "https://www.figma.com/api/mcp/asset/1c7af2be-3b28-42f3-a9d3-8401ff1f35ac";
const f2IconUrl =
  "https://www.figma.com/api/mcp/asset/bdffd64f-5e4b-4664-9dae-18b94fd4405f";
const f2ContentImage1Url =
  "https://www.figma.com/api/mcp/asset/bf194d59-6fd2-4f64-8b0d-4aa4e976f8a5";
const f2ContentImage2Url =
  "https://www.figma.com/api/mcp/asset/1c453b4a-8215-4a47-a8b8-1e8531c66f9a";
const f2EllipseUrl =
  "https://www.figma.com/api/mcp/asset/301399cb-5923-4814-b436-3da36473506b";
const f3ContentImage2Url =
  "https://www.figma.com/api/mcp/asset/b6541482-4fa7-470a-85f5-e3fad55e1556";
const f3IconVector1Url =
  "https://www.figma.com/api/mcp/asset/e9fba492-c51f-4ac1-9712-4e3ff89afff1";
const f3IconVector2Url =
  "https://www.figma.com/api/mcp/asset/5baa72ee-8be0-493e-bfd4-272bc81874ee";

// Trust section
const trustBgUrl =
  "https://www.figma.com/api/mcp/asset/878d9e68-0954-4377-a1c6-9fb2129391b7";
const trustSwirl1Url =
  "https://www.figma.com/api/mcp/asset/b8fa2e39-1f3b-4f6d-be29-6380ac584bd7";
const trustSwirl2Url =
  "https://www.figma.com/api/mcp/asset/a86fc646-dd91-4a75-a6f5-f00eda23fc6b";
const trustIcon1Url =
  "https://www.figma.com/api/mcp/asset/bf128c6b-e150-42de-ae5e-1653cef5743e";
const trustIcon2Url =
  "https://www.figma.com/api/mcp/asset/87ca9837-e0d7-465a-9d9a-38006571019f";
const trustIcon3Url =
  "https://www.figma.com/api/mcp/asset/57368bd1-ae68-4ece-8a7f-ce44ac40661d";
const trustIcon4Url =
  "https://www.figma.com/api/mcp/asset/dc7a21ce-64ac-4555-a932-3b8adf883ef0";

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium text-white whitespace-nowrap bg-warning">
      {children}
    </span>
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
        {["Beranda", "Keamanan", "Tentang Kami", "Hubungi Kami"].map((label) => (
          <a key={label} href="#" className="p-1 text-sm font-medium text-text-highlighted">
            {label}
          </a>
        ))}
        <span className="p-1 text-sm font-bold border-b-2 text-primary border-primary">
          Layanan
        </span>
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
    <section className="relative overflow-hidden bg-bg-inverted">
      {/* Background image */}
      <div className="absolute h-[635px] left-0 right-0 top-0 overflow-hidden">
        <img
          src={heroBgUrl}
          alt=""
          className="absolute max-w-none pointer-events-none w-[107.6%] h-[182.9%] -left-[0.68%] top-[19.98%]"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(24,24,27,0.95)] via-[rgba(24,24,27,0.5)] to-[rgba(24,24,27,0.95)]" />
      </div>

      {/* Centered text content */}
      <div className="relative mx-auto max-w-360 px-20">
        <div className="flex flex-col gap-9 items-center text-center pt-[120px]">
          <Badge>Layanan Kami</Badge>
          <div className="flex flex-col gap-[18px] items-center text-white">
            <h1 className="font-semibold text-5xl leading-12 whitespace-pre-wrap">
              {"Bangun Masa Depan\nInvestasi Anda Bersama Kami"}
            </h1>
            <p className="text-base leading-6 max-w-[620px]">
              Berbagai layanan yang kami rancang untuk mendukung pengelolaan aset
              Anda secara aman dan efisien dalam satu platform
            </p>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-secondary">
            Mulai Investasi
            <img src={heroArrowUrl} alt="" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3 value cards */}
      <div className="relative mx-auto px-20 max-w-360 mt-12">
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              iconUrl: card1IconUrl,
              title: "Portfolio terdiversifikasi\ndan terintegrasi",
              desc: "Menghubungkan pengelolaan aset tradisional, aset digital, dan exchange dalam satu ekosistem yang aman dan terintegrasi",
            },
            {
              iconUrl: card2IconUrl,
              title: "Exchange hemat\ndengan harga terbaik",
              desc: "Hasilkan imbal tinggi dari staking aset Anda di Earn dan dapatkan imbal hasil harian atau mingguan",
            },
            {
              iconUrl: card3IconUrl,
              title: "Automasi dan kontrol risiko\ndengan DCA dan GRID bot",
              desc: "Trading dengan DCA dan Grid Bot, strategi otomatis, serta kelola risiko melalui Stop Loss dan Stop Limit dalam satu platform",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 items-start p-8 rounded-xl bg-secondary-200 shadow-lg"
            >
              <div className="flex flex-col gap-6 items-center w-full">
                <div className="relative shrink-0 w-20 h-20">
                  <img src={card.iconUrl} alt="" className="absolute inset-0 w-full h-full object-contain" />
                </div>
                <p className="font-semibold text-2xl leading-8 text-text-highlighted text-center whitespace-pre-wrap">
                  {card.title}
                </p>
              </div>
              <p className="text-base leading-6 text-text-toned text-center w-full">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer so section ends cleanly */}
      <div className="relative h-16" />
    </section>
  );
}

// ─── Keunggulan CAMP Section ──────────────────────────────────────────────────

function KeunggulanSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-primary-50">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={keunggulanBgUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      <div className="relative mx-auto px-20 max-w-360 flex flex-col gap-20 items-center">
        {/* Section header */}
        <div className="flex flex-col gap-9 items-center text-center w-[850px]">
          <Badge>Keunggulan CAMP Investment</Badge>
          <div className="flex flex-col gap-[18px] items-center text-text-highlighted">
            <h2 className="font-semibold text-5xl leading-12 whitespace-pre-wrap">
              {"Satu Platform, Berbagai\nAset Investasi"}
            </h2>
            <p className="text-base leading-6">
              CAMP Investasi menghubungkan pengelolaan aset tradisional dan digital
              dalam satu ekosistem yang aman dan terintegrasi
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-10 w-full">
          {/* Row 1: narrow text + wide image */}
          <div
            className="flex items-stretch overflow-hidden rounded-lg shadow-lg h-[348px]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(95,104,73,0.9) 0%, rgba(95,104,73,0.9) 100%)",
            }}
          >
            {/* Left text panel */}
            <div className="flex flex-col gap-5 items-start p-8 w-[376px] shrink-0">
              <div className="relative shrink-0 w-14 h-14 rounded-full overflow-hidden">
                <img src={iconBgCircleUrl} alt="" className="absolute inset-[27.5%] w-[45%] h-[45%]" />
                <img src={f1IconUrl} alt="" className="absolute inset-[20%] w-[60%] h-[60%] object-contain" />
              </div>
              <h3 className="font-semibold text-2xl leading-8 text-white">
                Exchange aset kripto dengan harga terbaik dan aman
              </h3>
              <p className="text-base leading-6 text-white">
                Mulai pengalaman berinvestasi kripto dengan CAMP Investment, semua
                jadi lebih simpel, mudah, dan aman!
              </p>
            </div>

            {/* Right image panel */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={f1EllipseUrl}
                alt=""
                className="absolute w-[992px] h-[742px] left-[50px] -top-[42px] pointer-events-none"
              />
              <div className="absolute border border-ui-border rounded-[3.5px] overflow-hidden"
                style={{ right: 40, top: 47, width: 739, height: 410 }}>
                <img src={f1ContentImageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <img
                src={f1VectorUrl}
                alt=""
                className="absolute pointer-events-none"
                style={{ right: -90, top: "calc(50% + 121px)", width: 322, height: 341 }}
              />
            </div>
          </div>

          {/* Row 2: two equal cards */}
          <div className="grid grid-cols-2 gap-10">
            {/* Bottom left — blue */}
            <div className="flex flex-col justify-between overflow-hidden rounded-lg shadow-lg bg-[#456494]">
              <div className="flex flex-col gap-[18px] items-start p-8 pb-4">
                <div className="relative shrink-0 w-14 h-14 rounded-full overflow-hidden">
                  <img src={iconBgCircleUrl} alt="" className="absolute inset-[27.5%] w-[45%] h-[45%]" />
                  <img src={f2IconUrl} alt="" className="absolute inset-[20%] w-[60%] h-[60%] object-contain" />
                </div>
                <h3 className="font-semibold text-2xl leading-8 text-white">
                  Investasi dengan aset digital
                </h3>
                <p className="text-base leading-6 text-white">
                  Fokus pada produk berbasis blockchain dan kripto dengan teknologi
                  terdepan dan keamanan institusional
                </p>
              </div>
              <div className="relative h-[280px] overflow-hidden shrink-0">
                <img
                  src={f2EllipseUrl}
                  alt=""
                  className="absolute w-[786px] h-[536px] left-1/2 -translate-x-1/2 top-0 pointer-events-none"
                />
                <div
                  className="absolute border border-ui-border rounded-[3.5px] overflow-hidden left-1/2 -translate-x-1/2"
                  style={{ top: 39, width: 532, height: 295 }}
                >
                  <img src={f2ContentImage1Url} alt="" className="absolute inset-0 w-full h-[128%] object-cover" />
                  <img src={f2ContentImage2Url} alt="" className="absolute inset-0 w-full h-[115%] object-cover" />
                </div>
              </div>
            </div>

            {/* Bottom right — green */}
            <div
              className="flex flex-col justify-between overflow-hidden rounded-lg shadow-lg"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0,193,106,0.9) 0%, rgba(0,193,106,0.9) 100%)",
              }}
            >
              <div className="flex flex-col gap-5 items-start p-8 pb-4">
                <div className="relative shrink-0 w-14 h-14 rounded-full overflow-hidden bg-[#b3f5d1]">
                  <img src={f3IconVector1Url} alt="" className="absolute inset-0 w-full h-full object-contain" />
                  <img src={f3IconVector2Url} alt="" className="absolute inset-[25%_30%_25%_30%] w-[40%] h-[50%] object-contain" />
                </div>
                <h3 className="font-semibold text-2xl leading-8 text-white">
                  Investasi dengan aset tradisional
                </h3>
                <p className="text-base leading-6 text-white">
                  Investasi pada produk keuangan konvensional berizin OJK dengan
                  pengelolaan profesional dan transparansi kinerja
                </p>
              </div>
              <div className="relative h-[280px] overflow-hidden shrink-0">
                <img
                  src={f2EllipseUrl}
                  alt=""
                  className="absolute w-[786px] h-[536px] left-1/2 -translate-x-1/2 -top-[26px] pointer-events-none"
                />
                <div
                  className="absolute border border-ui-border rounded-[3.5px] overflow-hidden left-1/2 -translate-x-1/2"
                  style={{ top: 39, width: 532, height: 295 }}
                >
                  <img src={f2ContentImage1Url} alt="" className="absolute inset-0 w-full h-[128%] object-cover" />
                  <img src={f3ContentImage2Url} alt="" className="absolute inset-0 w-full h-[113%] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ title }: { title: string }) {
  return (
    <div className="relative h-[300px] overflow-hidden rounded-xl border border-ui-border bg-primary-100">
      {/* Illustrated top area — light background */}
      <div className="absolute inset-0 bottom-[80px] bg-primary-100" />
      {/* Dark label at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-[9px] bg-bg-inverted/80">
        <p className="font-semibold text-2xl leading-8 text-white">{title}</p>
      </div>
    </div>
  );
}

// ─── Services Grid Section ────────────────────────────────────────────────────

const SERVICES = [
  "Kripto Earn & Staking",
  "Dual Currency Investment",
  "Kripto Exchange",
  "Saham",
  "Reksa Dana",
  "Obligasi",
  "Automated Trading",
  "Stop Loss & Limit",
  "DCA & Grid Bot",
];

function ServicesGridSection() {
  return (
    <section className="relative py-20 bg-bg-inverted border-t border-white/10">
      <div className="mx-auto px-20 max-w-360">
        {/* Section header */}
        <div className="flex flex-col gap-9 items-center text-center mb-16 w-[634px] mx-auto">
          <Badge>Platform Terintegrasi</Badge>
          <div className="flex flex-col gap-[18px] text-white">
            <h2 className="font-semibold text-5xl leading-12">
              Nikmati Mudahnya
              <br />
              Investasi Bersama Kami
            </h2>
            <p className="text-base leading-6">
              Kami selalu berinovasi berikan yang terbaik
              <br />
              untuk menunjang semua aktivitas investasi Anda
            </p>
          </div>
        </div>

        {/* 3×3 grid */}
        <div className="flex flex-col gap-6">
          {[SERVICES.slice(0, 3), SERVICES.slice(3, 6), SERVICES.slice(6, 9)].map(
            (row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-3 gap-6">
                {row.map((title) => (
                  <ServiceCard key={title} title={title} />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Trust Section ────────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  {
    iconUrl: trustIcon1Url,
    title: "Mitra Kepercayaan",
    desc: "Dipercaya oleh institusi finansial terkemuka",
  },
  {
    iconUrl: trustIcon2Url,
    title: "One-Stop Investing",
    desc: "Semua kebutuhan investasi dalam satu platform",
  },
  {
    iconUrl: trustIcon3Url,
    title: "Institutional Grade",
    desc: "Standar keamanan dan layanan institusional",
  },
  {
    iconUrl: trustIcon4Url,
    title: "Locally Compliant",
    desc: "Terdaftar dan diawasi oleh OJK",
  },
];

function TrustSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={trustBgUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Swirl decorations */}
      <div className="absolute right-[765px] top-5 w-[566px] h-[428px] pointer-events-none">
        <img src={trustSwirl1Url} alt="" className="absolute inset-[-0.47%_-0.35%_0_-0.35%] w-[100.7%] h-full" />
      </div>
      <div className="absolute left-[110px] top-12 w-[566px] h-[417px] pointer-events-none -scale-y-100 rotate-180">
        <img src={trustSwirl2Url} alt="" className="absolute inset-[-0.48%_-0.35%_0_-0.35%] w-[100.7%] h-full" />
      </div>

      <div className="relative mx-auto px-20 max-w-360 flex flex-col items-center gap-16">
        {/* Section header */}
        <div className="flex flex-col gap-9 items-center text-center w-[1070px] mx-auto">
          <Badge>Kepercayaan Investor</Badge>
          <h2 className="font-semibold text-5xl leading-12 text-white">
            Dipercaya oleh Investor dan Institusi Keuangan untuk Pertumbuhan Jangka
            Panjang
          </h2>
        </div>

        {/* 4 trust cards */}
        <div className="grid grid-cols-4 gap-5 w-full">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 items-start p-6 rounded-xl bg-secondary-200 overflow-hidden"
            >
              <div className="flex flex-col gap-6 items-center w-full">
                <div className="relative shrink-0 w-20 h-20">
                  <img
                    src={item.iconUrl}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <p className="font-medium text-xl leading-7 text-text-highlighted text-center">
                  {item.title}
                </p>
              </div>
              <p className="text-base leading-6 text-text-toned text-center w-full">
                {item.desc}
              </p>
            </div>
          ))}
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
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-linear-to-r from-white to-transparent" />
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
      <div className="relative overflow-hidden rounded-xl px-10 py-8 bg-secondary-600">
        <img
          src={footerBgUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(102.62deg, #798360 54.337%, rgba(121,131,96,0) 100.01%)",
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

      <div className="rounded-xl flex flex-col gap-10 px-10 pt-10 pb-8 -mx-14 -mb-10 bg-bg-inverted">
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
        <div className="border-t border-white/10" />
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

export default function LayananPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <KeunggulanSection />
        <ServicesGridSection />
        <TrustSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
