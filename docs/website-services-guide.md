# Website Services: Private Business Guide

Internal notes (not part of the public site). Prices are suggested introductory UK figures, not verified market averages. Check current provider prices before quoting.

## 1. Model
You sell a finished website package (files, handover notes, deployment guidance). You do **not** sell hosting or run an ongoing managed service. The client owns the hosting and domain accounts and pays providers directly.

| Package | Price | Scope | Corrections | Delivery |
|---|---|---|---|---|
| Starter | £55 | 1 page | 1 round | 1–2 weekends |
| Business | £110 | Up to 5 pages | 2 rounds | 2–3 weekends |
| Premium | £180 | Up to 8 pages, bespoke design | 3 rounds | 3–4 weekends |

(Starter/Business correction rounds and delivery are my suggestions; adjust them.)

- A **round** = one consolidated list of changes from the client, not one message.
- Defect fixes: 30 days after handover, for reproducible defects against the agreed spec.
- Out of scope (quote separately): new pages/features, redesign, changes to an approved direction.
- Not your responsibility: hosting outages, DNS/domain config, third-party failures, client edits to code.

## 2. Realistic costs the client pays (approximate, check current prices)
- **Domain**: .co.uk roughly £5–£12/year; .com roughly £10–£15/year. Renewal is often higher than the first year.
- **Static hosting**: free options exist (GitHub Pages, Cloudflare Pages, Netlify) and suit static sites; traditional shared hosting roughly £2–£8/month.
- **SSL**: normally free (Let's Encrypt, included by most hosts).
- **Email**: not included in hosting by default; Google Workspace/Microsoft 365 roughly £5–£6/user/month; some hosts include basic mailboxes.
- **Contact forms**: static sites need a third-party form service (e.g. Formspree, free tier) or host-side PHP.
Typical client first-year total: about £10–£100 depending on choices, excluding any paid booking or payment-provider services.

## 3. Booking and payment features without running a backend
The website files are static and I do not sell or manage hosting, so do not promise a custom checkout, payment processing or booking database. Business and Premium can include one suitable third-party booking system or hosted payment portal, using a link or provider-supplied embed/checkout. The provider handles the booking/payment infrastructure; the client owns the provider account and pays any subscription or transaction fees.

Before offering this as part of a quote:
1. Ask what the client needs to sell or book, including prices, availability, cancellations/refunds and notifications.
2. Research providers that meet those needs and work with a static website. Confirm current fees, supported countries/currencies, accessibility, and whether a link or embed is available; do not assume a provider is free or suitable.
3. Have the client create and own the provider account, complete identity/bank verification if required, and configure their services, prices, schedule and policies. Never collect or store their passwords or customers’ card details.
4. Agree in writing exactly what is included. Use the provider’s hosted checkout/booking page or approved embed; do not build a payment backend or claim to process payments yourself. If an embed needs a paid hosting plan, backend, custom API work or a feature beyond your ability, explain that before accepting the work and quote separately or decline it.
5. Add links/embed to the website, then test on desktop and mobile. For payments, use the provider’s test mode and verify the complete customer journey before launch; for bookings, test availability, confirmation and cancellation flows. Have the client verify their live account and payout settings.
6. Ensure the client supplies suitable privacy, cookie, terms, refund/cancellation and booking-policy wording. Explain what customer data the provider collects and check whether the site needs consent controls. The client should confirm their legal/data-protection obligations; get professional advice if unsure.
7. Deploy the site to a compatible host and test the live integration again. The client pays for hosting/domain and third-party services directly. Explain that provider outages, account changes, fees, payments and ongoing service support are outside the website package unless separately agreed.

If the client needs custom payment flows, stored customer/payment data, a booking database or automated business-system integration, that requires a properly hosted backend and additional security, privacy, maintenance and support planning. Do not include it in these fixed-price packages without the skills and a separate plan for those responsibilities.

## 4. What you need to know before expanding into hosting/domains
Guided help (recommended): you explain options, and the client signs up and pays. You never hold their credentials, or if you must, they are temporary and revoked afterwards. Ensure the client is the registrant and account owner of the domain.

Reselling hosting/domains or managing it (not recommended initially) means:
- You become responsible for uptime, backups, security patches and support, often outside weekends.
- Data protection: you may become a processor of client data (UK GDPR); consider ICO registration (data protection fee, from around £40/year for small controllers) and a processing agreement.
- Insurance: professional indemnity/public liability, typically about £100–£300/year for a small sole trader.
- Margins on reselling are small (a few pounds per month per client) versus the support burden.
- If you do add it later, sell it as a separate monthly maintenance plan with a defined scope and response times.

## 5. Business basics (UK)
- Sole trader: register with HMRC for Self Assessment by 5 October after the tax year you start trading. The £1,000 trading allowance may cover small side income. Check your employment contract (Fujitsu) for rules on outside work or conflicts of interest, and get permission if needed.
- Keep records of income and expenses; keep invoices.
- Consumer clients (sole traders buying for personal use) get statutory rights; business clients are covered by your terms.
- Use written terms: scope, deposit, rounds, payment, ownership/licence, client-supplied content warranty, liability cap.
- Deposit: 30–50% before starting; balance on delivery before files are released (or release the final files on payment).
- Client supplies content (text, images, logos) and must have rights to use them.
- Limit to a small number of projects at once (e.g. 1–2 per month) so weekends stay manageable.

## 6. Process checklist
1. Enquiry; short brief.
2. Quote: pages, features, rounds, delivery window, price.
3. Deposit and written approval of page list, content and design direction.
4. Build; present draft.
5. Correction rounds (consolidated lists).
6. Final payment; hand over files, notes, deployment guide.
7. 30-day defect window.
8. Optional: separately quoted changes or maintenance.

## 7. Example pricing of your time
At £110 for roughly 12–16 hours the effective rate is around £7–£9/hour; Premium at £180 for 25–30 hours is around £6–£7/hour. Keep track of the actual time spent, especially on third-party integrations, and revise the scope or quote separately if a package is not sustainable.

## 8. Android app work
Non-Play-Store Android apps start at £300. Agree the app scope, supported devices/Android versions, testing, signing, delivery method and how future updates will be provided before quoting. Direct APK distribution means the client must understand how the app will be installed and updated and that Android may show security warnings for apps installed outside Google Play. Check any applicable business, privacy and support obligations for the specific app.
