# Script — Accounting Review MVP

> Generated automatically by `npm run roteiro` from `src/content/`. Do not edit by hand.

12 slides · 16:9 · Created by Emanuel Santos

## 01 · Accounting review that is clearer, traceable and easy to follow

**Layout:** Dark cover (Night). Editorial title on the left with one Pulse highlight; on the right, an open frame with the five flow steps assembling in sequence.

**On-screen text**

- ES/ · Prototype under validation
- MVP · Accounting review
- Accounting review that is clearer, traceable and easy to follow.
- An assistant that checks tax slips, calculations and documents, one month at a time, and shows where every figure comes from.
- The flow, in five steps
  - Upload
  - Reading
  - Confirmation
  - Calculation
  - Report
- Supports the review · Final sign-off by a licensed accountant

**Speaker notes**

> Good afternoon. Today I want to show you a simple prototype with a very clear goal: making the monthly accounting review easier to follow.
>
> The idea is not to replace the accountant. It is to give the company a way to understand the figures it receives — where each number comes from, which rule was applied and whether there is any difference.
>
> On the right you can see the whole flow in five steps: upload, reading, confirmation, calculation and report. I'll come back to it later with the prototype. And by the end, I'd like us to leave with a decision about a small pilot.
>

## 02 · About me

**Layout:** Authorship slide (part of the 30% Emanuel share). On the left, the ES/ signature in an open frame with name and descriptor; on the right, three cards — technology, processes, product — entering in sequence.

**On-screen text**

- ES/
- Portrait of Emanuel Santos
- Emanuel Santos
- Strategy, design and engineering of digital products.
  - Technology — I build and test systems — From prototype to code that can be verified.
  - Processes — I organize before automating — Understanding the routine comes before any screen.
  - Product — I turn doubt into flow — Loosely structured problems become clear steps.
- Systems Analysis and Development · Extension Project

**Speaker notes**

> A quick word about me. My name is Emanuel Santos, and I work where strategy, design and the engineering of digital products meet.
>
> In practice, that means three things: I build and test systems; before automating, I organize the process — because a nice screen on top of a messy routine only makes the mess faster; and I like taking loosely structured problems and turning them into clear steps.
>
> This work was born in my Systems Analysis and Development course, as an extension project. That's what I explain on the next slide.
>

## 03 · PEX — Extension Project

**Layout:** Horizontal process with three nodes (diagnosis, data collection, proposal). The line draws from left to right; the third node is filled and tagged “We are here”.

**On-screen text**

- An extension project that starts from a real problem.
- PEX — the university Extension Project in Systems Analysis and Development: bringing useful technology into the routine of small businesses.
  - 01 — Diagnosis — Understand the company's routine and its doubts.
  - 02 — Data collection — Conversation, questionnaire and real documents.
  - 03 — Proposal — A prototype of the flow and a plan for a pilot.
- We are here
- Academic origin · The problem and the decision belong to the company

**Speaker notes**

> PEX is the course's Extension Project. The idea is simple: leave the classroom, identify a real problem in a small business and propose a feasible systems solution.
>
> It has three stages. First, diagnosis: understanding the routine and where the doubts are. Then, data collection: conversation, questionnaire and documents. Finally, the proposal: a prototype and an action plan.
>
> We are at the third stage. Everything I'm about to show is the proposal — and it only makes sense if it makes sense for the company.
>

## 04 · The current problem

**Layout:** Tension. On the left, the title and four pain points with icons. On the right, the month's documents drop in scattered and slightly rotated; dark speech bubbles with doubts pop up on top.

**On-screen text**

- The figure arrives ready. The explanation doesn't.
  - Documents scattered across email, PDFs, photos and spreadsheets.
  - Calculations hard to follow without the calculation trail.
  - Discrepancies noticed late, close to the due date.
  - Every doubt means another round of questions.
  - PDF — DAS tax slip
  - Spreadsheet — Payroll
  - XML / PDF — Invoices
  - Photo — Receipt
  - PDF — Bank statement
  - Receipt — Intern stipend
  - Where did this figure come from?
  - Is it right?
  - Has it been paid?

**Speaker notes**

> This is the problem I found. Every month the company receives tax slips, calculations and documents. The figure arrives ready — but the explanation doesn't.
>
> The documents are scattered: a PDF in an email, a photo on a phone, a spreadsheet somewhere else. The calculations are hard to follow without the calculation trail. And when a discrepancy shows up, it's usually close to the due date, when there's no time left to understand it calmly.
>
> As a result, every doubt turns into another round of questions to the accountant. Not because anyone is careless — but because there is no single place where the company can see where each number comes from.
>

## 05 · MVP goal

**Layout:** On the left, the message and the reference scenario as pills. On the right, an editorial card with the anatomy of a check: reported, expected, difference; then rule, source and pending items.

**On-screen text**

- Check one month at a time.
- Every figure comes with the rule applied, the source document and the difference found.
- Reference scenario
  - Legal services · São Paulo
  - Simples Nacional · Annex IV
  - Partner on owner's pay
  - Intern · 6 h/day
- Anatomy of a check
  - Reported — The figure on the tax slip or document.
  - Expected — The figure the calculation points to.
  - Difference — Always shown, even when small.
  - Rule — Formula and table for the month.
  - Source — Document and page of origin.
  - Pending — What is missing or unreadable.

**Speaker notes**

> The MVP goal is deliberately small: check one reference month at a time.
>
> For each item checked, people see three things side by side: the reported figure, the figure the calculation expects and the difference. And the difference is always shown, even when it's small. There is no automatic tolerance: a person decides whether a difference matters, not the system.
>
> On top of that, every figure comes with the rule applied, the source document and page, and whatever is still pending.
>
> The reference scenario is real: a legal services firm in São Paulo under Simples Nacional — Brazil's simplified tax regime for small businesses — Annex IV, with one partner on owner's pay and a university intern working six hours a day.
>

## 06 · Proposed solution

**Layout:** Diagram in three clicks: (0) four input types; (1) the lines converge into the assistant, a dark block; (2) the output — the report — and the strip about failed readings and accountant sign-off.

**Internal clicks:** 2

**On-screen text**

- You send what you have. The assistant asks for what's missing.
- Input
  - PDF
  - Excel sheet
  - Photo
  - Typed data
- Assistant
- Reads, asks, recalculates
  - Reads the documents
  - Spots what's missing
  - Recalculates the figures
- Output
- Clear report
  - Plain explanation
  - Calculation trail
  - Every discrepancy
- Reading failed? → asks for a new photo, file or typed data
- Final sign-off: licensed accountant

**Speaker notes**

> The solution starts from one rule: the company sends what it already has. A PDF, a spreadsheet, a photo taken with a phone or typed data. Nobody has to reorganize their routine before starting.
>
> (click) The assistant reads those documents, spots what's missing and asks — instead of guessing. Then it recalculates the month's figures based on the rules in force for that month.
>
> (click) The output is a clear report: a plain-language explanation, the calculation trail and the full list of discrepancies.
>
> Two important safeguards. If a reading fails — a blurry photo, an unreadable PDF — the system asks for another photo, another file or typed data, and marks the check as pending. And the final sign-off still belongs to a licensed accountant.
>

## 07 · Prototype flow

**Layout:** Demo. A mock website (left) and a mock phone (right) show the same step at the same time. Each click moves forward: upload → reading → confirmation → calculation → report. “Simulated case” badge in the corner.

**Internal clicks:** 4

**On-screen text**

- The same flow, on the web and on mobile.
- Simulated case · questionnaire assumptions
- review.prototype/month
  - Upload
  - Reading
  - Confirmation
  - Calculation
  - Report
    - Reference month
    - Send this month's documents
    - Drag a PDF, spreadsheet or photo
    - or type the data manually
    - Received
    - Data found in the documents
    - Read
    - Missing
    - Before calculating, I need to confirm
    - Review result
      - Item
      - Reported
      - Expected
      - Difference
      - Status
    - Review
    - Type or send a file
  - Test month
    - das-tax-slip.pdf — PDF
    - owner-pay-payroll.xlsx — Sheet
    - intern-receipt.jpg — Photo
    - Gross revenue (month) — R$ 30,000.00 — reported
    - RBT12 (12-month revenue) — R$ 360,000.00 — reported
    - DAS on the tax slip — R$ 2,025.00 — das-tax-slip.pdf · p. 1
    - Owner's gross pay — R$ 7,000.00 — owner-pay-payroll.xlsx
    - DAS payment receipt — — — not found
    - Has this month's DAS tax slip been paid?
      - Send receipt
      - Not yet
      - Not sure
    - Is R$ 360,000.00 the RBT12 your accountant reported?
      - Confirm
      - Correct
  - Without the receipt, the payment stays pending — the rest goes on.
    - Calculation trail · DAS
      - Bracket — RBT12 R$ 360,000.00 → Annex IV, 2nd bracket
      - Table — rate 9% · deduction R$ 8,100.00
      - Effective rate — (360,000 × 9% − 8,100) ÷ 360,000 = 6.75%
      - Expected DAS — 30,000.00 × 6.75% = R$ 2,025.00
    - Table versioned by month · source shown in the report
      - 2 checked
      - 1 pending
      - Difference always shown
      - DAS — 2,025.00 — 2,025.00 — 0.00 — Checked
      - CPP on owner's pay — 1,400.00 — 1,400.00 — 0.00 — Checked
      - DAS payment — — — receipt — — — Pending
    - Report ready for the licensed accountant's sign-off.
    - Hi! Send this month's documents: PDF, spreadsheet or photo.
    - I read 3 documents and found 4 figures to check.
    - I couldn't find the DAS payment receipt.
    - Has the DAS tax slip been paid?
    - I calculated the expected DAS with this month's table:
    - Review complete. Here's the summary:

**Speaker notes**

> Now, the prototype. It is concrete evidence of the flow — not a finished product. The numbers come from the simulated case in the questionnaire itself: R$ 30,000 of revenue in the month, R$ 360,000 of RBT12 — the revenue of the previous twelve months — and R$ 7,000 of owner's pay.
>
> (click) Upload: the company sends what it has — a tax slip as a PDF, the payroll as a spreadsheet, a photo of a receipt. On the phone, this happens as a chat.
>
> (click) Reading: the system shows what it found and where each piece of data came from. And it already flags what's missing: here, the DAS payment receipt. DAS is the single monthly tax slip of Simples Nacional.
>
> (click) Confirmation: instead of guessing, it asks. If nobody knows, the item stays pending and the rest of the review continues.
>
> (click) Calculation: the calculation trail is visible line by line — bracket, table, effective rate and expected value. In this simulated case, the expected DAS is R$ 2,025, the same as on the tax slip.
>
> (click) Report: what was checked, what is pending and the difference for each item — even when it is zero. And the report always ends in the same place: the licensed accountant's sign-off.
>
> (Presenter note: the Annex IV table and the 20% CPP — employer social security contribution — on owner's pay are assumptions of the simulated case; confirm them with the accountant before using real data.)
>

## 08 · What we need to get started

**Layout:** Four numbered cards side by side (documents, access, data, infrastructure), each with an icon, a short sentence and a mono tag naming the decision needed.

**On-screen text**

- Four decisions before the first review.
- None of this requires integrations or investment in permanent infrastructure.
  - Documents — Tax slips, payroll, invoices and statements for the month. — Who gathers them?
  - Access — Who sends, who views and who signs off. — Who takes part?
  - Data — Purpose, retention and disposal agreed in writing. — Who is accountable?
  - Infrastructure — Where the pilot runs and who maintains it. — Where does it run?
- Personal and tax data · processed for a defined purpose under the LGPD (Brazil's data protection law)

**Speaker notes**

> To get started, we need four decisions — and none of them depends on integrating with other systems.
>
> First, the documents: tax slips, payroll, invoices and statements for a single month. Second, access: who sends, who views and who signs off the report.
>
> Third, and most important: accountability for the data. We are talking about the company's tax data and the personal data of the partner and the intern. So purpose, retention period and disposal must be agreed in writing before the first upload, in line with the LGPD, Brazil's data protection law.
>
> And fourth, the pilot's infrastructure: where the prototype runs and who looks after that environment during the test.
>

## 09 · Quick questions and full questionnaire

**Layout:** Two columns. Step 0: four questions in speech bubbles, to answer during the conversation. Step 1: on the right, the seven blocks of the full questionnaire condensed into a numbered list.

**Internal clicks:** 1

**On-screen text**

- A quick chat today. Full record later.
- It isn't red tape: every recorded answer gives context to the calculation, traceability to the result and a basis for the accountant's sign-off.
- Now, in conversation
  - Which month do we check first?
  - Which documents do you already have?
  - Which figure raises the most doubts?
  - Who signs off the final report?
- In the full questionnaire
  - Identification — CNPJ, CNAE and tax regime
  - Revenue — monthly revenue and RBT12
  - DAS slip — annex, bracket and payment
  - Owner's pay — INSS, IRRF and CPP
  - Internship — agreement, stipend, insurance
  - Expenses — other slips and documents
  - Sign-off — criteria and person in charge

**Speaker notes**

> The full questionnaire is long — and I don't want it to become a barrier. So I split it into two moments.
>
> Some questions fit right here, now, in our conversation: which month we check first, which documents already exist, which figure raises the most doubts and who signs off the final report.
>
> (click) The rest must be recorded: company identification and activity codes, revenue and RBT12, the DAS tax slip, owner's pay, the internship, other expenses and the sign-off criteria.
>
> It isn't red tape. Every recorded answer is what lets the system explain why a figure is right or wrong, and what lets the accountant check the reasoning later. Without it, the calculation becomes a black box — exactly what we want to avoid.
>

## 10 · First MVP scope

**Layout:** Three large mono counters (01 company · 01 month · 03 checks). Below, a comparison: “Inside the MVP” in an open frame with checks; “Out, for now” in a neutral block with dashed markers.

**On-screen text**

- Small enough to truly validate.
  - 01 — Company
  - 01 — Month
  - 03 — Checks
- Inside the MVP
  - DAS × revenue and RBT12
  - Owner's pay: INSS, IRRF and CPP
  - Internship: stipend and transport aid
  - Report with every discrepancy
- Out, for now
  - Integration with other systems
  - Filing returns or making payments
  - Decisions without accountant sign-off
  - Balance sheet and financial management

**Speaker notes**

> The first MVP is small on purpose: one company, one month and three checks.
>
> In scope: the DAS checked against revenue and RBT12; owner's pay, with social security, income tax withholding and the employer contribution; and the internship, with stipend and transport aid. All of it delivered in a report that shows every discrepancy.
>
> It's just as important to say what stays out: no integration with other systems, no filing returns or making payments, no decision without the accountant's sign-off. The balance sheet and financial management also come later.
>
> A scope like this tells us quickly whether the idea works — and if it doesn't, finding that out is cheap.
>

## 11 · Shall we close an MVP?

**Layout:** Dark decision slide. Step 0: the pilot plan in four numbered lines. Step 1: a success-criteria card on the right and a full-width blue strip with today's decision.

**Internal clicks:** 1

**On-screen text**

- Shall we run a pilot?
- One month, real documents and a joint review. No commitment beyond that.
- Proposal
  - Pick the month and gather the documents
  - Run the review in the prototype
  - Go over the report with the accountant
  - Decide together: adjust, expand or stop
- Success criteria
  - Every figure shows its source and formula
  - Every discrepancy appears in the report
  - The accountant signs off without redoing it
  - The company understands the result unaided
- Today's decision
- Which month, which documents and the review date.

**Speaker notes**

> So, the proposal: shall we run a pilot? It is small and has a beginning, a middle and an end.
>
> First, we pick a month and gather the documents. Then I run the review in the prototype. Next, we go over the report together with the accountant. And finally, we decide together: adjust, expand or stop.
>
> (click) To know whether it worked, I propose four criteria: every figure shows its source and formula; every discrepancy appears in the report; the accountant can sign off without redoing the calculation; and the company understands the result without technical help.
>
> What I need to leave here knowing is simple: which month, which documents and the review date.
>

## 12 · What comes next

**Layout:** Dashed horizontal timeline. The first node (Now · review MVP) is solid; the others (balance sheet, financial tracking, business management) are dashed, signalling possibility. Closes with the continuity line and the endorsement.

**On-screen text**

- First, review. Then, keep track.
- Each next step only starts if the previous one proves its value in the pilot.
  - Now — Review — One month, with a discrepancy report.
  - Possible — Balance sheet — A consolidated view built from the reviews.
  - Possible — Finance — Tracking inflows, outflows and deadlines.
  - Possible — Management — Indicators for the company's decisions.
- Ideas take shape and keep going.
- Emanuel Santos · ES/

**Speaker notes**

> To wrap up: this MVP is about reviewing. It is not a management system — at least not yet.
>
> If the pilot proves its value, there are natural next steps: a consolidated balance sheet built from the reviews, financial tracking of inflows, outflows and deadlines and, further ahead, indicators for running the company.
>
> But each step only starts if the previous one works. The first decision is today's: the pilot.
>
> Thank you. I'm happy to take questions — and to agree on the month and the review date.
>
