# AfrikanMission.com — Pre-launch Landing Page

A production-ready Next.js landing page for the **Rise African Rise** music video premiere and **AfrikanMission.com** pre-launch. Dark, cinematic, minimal. Subscriptions stream live into Firestore.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Firebase Firestore · Google Fonts (Barlow Condensed + Lora)

---

## 1. Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and fill in your Firebase values
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open `http://localhost:3000`.

---

## 2. Firebase setup (≈ 5 minutes)

### 2.1 Create the project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project**.
2. Name it `afrikan-mission` (or anything).
3. Google Analytics is optional — you can skip it.

### 2.2 Create a Firestore database

1. In the left sidebar → **Build → Firestore Database → Create database**.
2. Start in **production mode**. Region: pick the one closest to your audience (e.g. `europe-west1` for Africa/Europe).

### 2.3 Register a Web app

1. Project Overview → the `</>` web icon → register app → name it `afrikan-mission-web`.
2. Firebase will show a `firebaseConfig` object. Copy those values into `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=afrikan-mission.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=afrikan-mission
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=afrikan-mission.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567890
NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:abcdef
```

### 2.4 Add Firestore security rules

The form writes to a `submissions` collection. Default rules block all writes. Go to **Firestore → Rules** and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /submissions/{doc} {
      // Anyone can create a submission, nobody can read them from the client.
      // You read them from the Firebase Console or with admin credentials.
      allow create: if
        request.resource.data.name is string &&
        request.resource.data.name.size() > 0 &&
        request.resource.data.name.size() < 200 &&
        request.resource.data.email is string &&
        request.resource.data.email.matches('^[^@]+@[^@]+\\.[^@]+$') &&
        request.resource.data.email.size() < 200;
      allow read, update, delete: if false;
    }
  }
}
```

Click **Publish**.

> Later, if you want to add spam protection, enable **App Check** with reCAPTCHA v3.

### 2.5 Watch submissions in real-time

- **Firebase Console → Firestore Database → `submissions`** — refreshes live as entries come in.
- Or export to Google Sheets via Zapier / Make / a Cloud Function.

---

## 3. Set the YouTube video

In `.env.local`, set the 11-character video ID from your YouTube URL:

```
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=abcdEFGHijk
```

From `https://www.youtube.com/watch?v=abcdEFGHijk`, use `abcdEFGHijk`.

---

## 4. Swap in the real Teleskope logo

The current hero uses a typographic TELESKOPE wordmark built from Barlow Condensed ExtraBold — brand-compliant and production-ready on its own.

When you have your final logo (SVG preferred):

1. Drop it into `/public/teleskope-logo.svg`
2. Open `components/TeleskopeLogo.tsx`
3. Replace the `<div>...</div>` body with:

```tsx
<img
  src="/teleskope-logo.svg"
  alt="Teleskope"
  className={`mx-auto w-[clamp(200px,40vw,480px)] ${className}`}
/>
```

---

## 5. Deploy

### Vercel (recommended — zero config)

1. Push this folder to a GitHub repo.
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. In **Environment Variables**, paste every `NEXT_PUBLIC_*` value from your `.env.local`.
4. Deploy. Done.

### Any Node host

```bash
npm run build
npm start
```

---

## 6. Project structure

```
app/
  layout.tsx       — fonts, metadata, grain overlay
  page.tsx         — composes Hero + Video + CTA + Form + Footer
  globals.css      — grain, hairlines, form resets, reveal animations

components/
  Hero.tsx         — logo + event headline + poster-style metadata
  VideoSection.tsx — framed YouTube embed with gold corner marks
  CTA.tsx          — cinematic "Join The Afrikan Mission" banner
  Form.tsx         — the main form, Firestore submit, success state
  TeleskopeLogo.tsx
  Input.tsx
  TextArea.tsx
  MultiSelect.tsx  — custom country picker with search + max 5
  FadeIn.tsx       — IntersectionObserver scroll reveal

lib/
  firebase.ts      — lazy singleton init
  types.ts         — Submission, age groups, memberships, interests
  countries.ts     — all 54 African nations with flags
```

---

## 7. Data schema (what lands in Firestore)

Every submission creates a document in `submissions` with:

```ts
{
  name: string,
  email: string,          // lowercased, trimmed
  phone: string,
  ageGroup: "under-12" | "13-17" | "18-25" | "26+" | "",
  motivation: string,
  countries: string[],    // ISO codes, e.g. ["ET", "KE", "NG"]
  membership: "teleskope-music-artists" | "rise-afrikan-rise-mission-giants" | "both" | "",
  interests: Interest[],  // e.g. ["download-music", "attend-tour"]
  createdAt: Timestamp,   // server-generated
  source: "afrikanmission-landing",
  userAgent: string | null
}
```

---

## 8. Brand tokens (already wired into Tailwind)

| Name       | Hex      | Class       |
|------------|----------|-------------|
| Ink        | `#000000`| `bg-ink`    |
| Paper      | `#FFFFFF`| `text-paper`|
| Mute       | `#757575`| `text-mute` |
| Gold       | `#D4AF37`| `text-gold` |
| Maroon     | `#7E0C02`| `bg-maroon` |
| Cocoa      | `#3C2419`| `bg-cocoa`  |
| Hazel      | `#866441`| `bg-hazel`  |
| Ember      | `#DA4003`| `text-ember`|
| Sky        | `#C1D6DA`| `bg-sky`    |
| Charcoal   | `#0C0C0C`| `bg-charcoal`|

Fonts: `font-display` (Barlow Condensed) · `font-body` (Lora).

---

**Questions?** The code is intentionally small and readable — every file is under 300 lines and commented where it matters.
