import type {
  Question,
  ForgeData,
  SortData,
  FlashData,
} from '../types/game';

export const questions: Question[] = [
  // ============================================================
  // REALM 1: The Threshold of Seeing (Week 1 - Intro)
  // ============================================================
  {
    id: 'r1q1',
    realm: 1,
    type: 'multiple-choice',
    question:
      'A survey response says "I didn\'t trust the site." What kind of data is this?',
    options: ['Quantitative', 'Qualitative', 'Behavioral', 'Structural'],
    correctAnswer: 1,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Qualitative', 'Quantitative'],
      items: [
        { text: '"I didn\'t trust the site"', bucket: 0 },
        { text: 'Bounce rate 74%', bucket: 1 },
        { text: '"The checkout felt confusing"', bucket: 0 },
        { text: 'Average session duration 2:34', bucket: 1 },
        { text: '"I couldn\'t find the return policy"', bucket: 0 },
        { text: 'Conversion rate 3.2%', bucket: 1 },
      ],
    } as SortData,
    explanation:
      'Subjective opinions, feelings, and open-text responses are qualitative data. They describe qualities, not quantities.',
  },
  {
    id: 'r1q2',
    realm: 1,
    type: 'multiple-choice',
    question:
      '"Mobile bounce rate 74%, desktop 41%." What kind of data is this?',
    options: ['Qualitative', 'Quantitative', 'Anecdotal', 'Observational'],
    correctAnswer: 1,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Qualitative', 'Quantitative'],
      items: [
        { text: 'Page views per session: 3.7', bucket: 1 },
        { text: '"The button was hard to find"', bucket: 0 },
        { text: 'Cart abandonment rate 68%', bucket: 1 },
        { text: 'User interview transcript', bucket: 0 },
        { text: 'Revenue per visitor: 12 kr', bucket: 1 },
        { text: 'NPS comment: "Love the app"', bucket: 0 },
      ],
    } as SortData,
    explanation:
      'Percentages, rates, and numerical measurements are quantitative data. They can be counted and compared mathematically.',
  },
  {
    id: 'r1q3',
    realm: 1,
    type: 'multiple-choice',
    question:
      'What does combining qualitative and quantitative data give you?',
    options: [
      'Twice as much data to present',
      'A stronger evidence base',
      'Permission to skip user testing',
      'Faster analysis time',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Quant tells you WHAT is happening (numbers, patterns). Qual tells you WHY (motivations, feelings). Together they form a stronger evidence base, or as the course puts it: "Quant + Qual = Truth."',
      verifyQuestion: 'What does quantitative data primarily tell you?',
      verifyOptions: [
        'Why users behave a certain way',
        'What is happening in the numbers',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'The course emphasizes "Quant + Qual = Truth." Combining both data types creates a stronger evidence base than either alone.',
  },
  {
    id: 'r1q4',
    realm: 1,
    type: 'multiple-choice',
    question:
      'The assignment structure follows a specific flow. What is the correct order?',
    options: [
      'Design \u2192 Data \u2192 Insight',
      'Data \u2192 Insight \u2192 New Design',
      'Insight \u2192 Design \u2192 Data',
      'Data \u2192 New Design \u2192 Insight',
    ],
    correctAnswer: 1,
    miniGameType: 'forge',
    miniGameData: {
      template:
        'The assignment workflow starts with ___ evidence, then you extract an ___, and finally you propose a ___.',
      blanks: ['data', 'insight', 'new design'],
      distractors: ['hypothesis', 'prototype', 'persona'],
    } as ForgeData,
    explanation:
      'The assignment structure is Data (screenshot) \u2192 Insight (why it matters) \u2192 New Design (your improvement).',
  },
  {
    id: 'r1q5',
    realm: 1,
    type: 'multiple-choice',
    question: 'Which tool is NOT used in this course?',
    options: ['GA4', 'Symplify', 'PostHog', 'Hotjar'],
    correctAnswer: 3,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Used in course', 'Not used in course'],
      items: [
        { text: 'GA4', bucket: 0 },
        { text: 'Symplify', bucket: 0 },
        { text: 'PostHog', bucket: 0 },
        { text: 'Hotjar', bucket: 1 },
        { text: 'Amplitude', bucket: 1 },
        { text: 'Mixpanel', bucket: 1 },
      ],
    } as SortData,
    explanation:
      'The course uses GA4 (web analytics), Symplify (heatmaps/recordings), and PostHog (product analytics). Hotjar is not part of the course toolset.',
  },
  {
    id: 'r1q6',
    realm: 1,
    type: 'multiple-choice',
    question: 'What does Symplify primarily provide in this course?',
    options: [
      'Funnel analysis and cohort reports',
      'Heatmaps, session recordings, and polls',
      'A/B testing and email automation',
      'Search engine optimization data',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Symplify is the behavioral analytics tool used in this course. It provides heatmaps (click and scroll), session recordings to watch real user behavior, and on-site polls to collect qualitative feedback.',
      verifyQuestion:
        'Which of these is a Symplify feature used in the course?',
      verifyOptions: [
        'Funnel reports',
        'Session recordings',
        'Cohort analysis',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Symplify provides heatmaps, session recordings, and polls \u2014 the behavioral analysis tools used in this course.',
  },
  {
    id: 'r1q7',
    realm: 1,
    type: 'ordering',
    question: 'Put the assignment workflow steps in the correct order.',
    items: ['New design', 'Insight (why)', 'Data screenshot'],
    correctOrder: [2, 1, 0],
    miniGameType: 'forge',
    miniGameData: {
      template:
        'First, capture a ___ from your analytics tool. Then, write the ___ explaining why it matters. Finally, propose a ___.',
      blanks: ['data screenshot', 'insight', 'new design'],
      distractors: ['user flow', 'wireframe', 'stakeholder brief'],
    } as ForgeData,
    explanation:
      'The assignment workflow is: Data screenshot (evidence) \u2192 Insight (why it matters) \u2192 New design (your proposed improvement).',
  },
  {
    id: 'r1q8',
    realm: 1,
    type: 'multiple-choice',
    question: 'Where in UX does analytics apply?',
    options: [
      'Only during usability testing',
      'Only after launch',
      'Anywhere you want to do user research',
      'Only for e-commerce sites',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Analytics is not limited to a single phase of UX work. It applies anywhere you want to understand users \u2014 before, during, and after design. It is a form of user research that uses real behavioral data.',
      verifyQuestion: 'Is analytics limited to post-launch evaluation?',
      verifyOptions: [
        'Yes, only after launch',
        'No, it applies throughout UX work',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Analytics applies anywhere you want to do user research. It is not limited to a specific phase or type of product.',
  },
  {
    id: 'r1q9',
    realm: 1,
    type: 'multiple-choice',
    question: 'Why is customer service data valuable for UX?',
    options: [
      'It replaces the need for analytics tools',
      "When CS hears about it, it's the tip of the iceberg",
      'It provides statistically significant sample sizes',
      'Customer service agents are trained UX researchers',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Most users who have a problem never contact support \u2014 they just leave. So when customer service receives complaints, those represent only the most motivated users. The real problem is much larger.',
      verifyQuestion:
        'If 10 users contact CS about a problem, what does it likely mean?',
      verifyOptions: [
        'Exactly 10 users have that problem',
        'Many more users have the same problem but never reported it',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'When customer service hears about a problem, it is the tip of the iceberg. Most users with the same issue never bother to contact support.',
  },
  {
    id: 'r1q10',
    realm: 1,
    type: 'multiple-choice',
    question: 'What do product reviews reveal for UX analysis?',
    options: [
      'Exact conversion rates',
      'Server response times',
      'Real language, recurring complaints, and mental models',
      'Which A/B test variant won',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Product reviews are a goldmine of qualitative data. They reveal how users actually talk about products (real language), what problems keep coming up (recurring complaints), and how users think about the product category (mental models).',
      verifyQuestion:
        'What type of data do product reviews primarily provide?',
      verifyOptions: ['Quantitative metrics', 'Qualitative insights'],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Product reviews reveal real user language, recurring complaints, and mental models \u2014 all valuable qualitative data for UX work.',
  },

  // ============================================================
  // REALM 2: The Counting House (Week 2 - GA4)
  // ============================================================
  {
    id: 'r2q1',
    realm: 2,
    type: 'true-false',
    question:
      'In GA4, one user can have multiple sessions, and each session can have multiple page views.',
    options: ['True', 'False'],
    correctAnswer: 0,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'GA4 has a hierarchy: Users \u2192 Sessions \u2192 Events (including page views). One person (user) can visit multiple times (sessions), and each visit contains multiple actions (events/page views).',
      verifyQuestion: 'What is the correct hierarchy in GA4?',
      verifyOptions: [
        'Sessions \u2192 Users \u2192 Events',
        'Users \u2192 Sessions \u2192 Events',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'GA4 follows the hierarchy: Users \u2192 Sessions \u2192 Events. One user can have many sessions, each containing many page views and other events.',
  },
  {
    id: 'r2q2',
    realm: 2,
    type: 'multiple-choice',
    question:
      'What happens to your analytics data when a visitor declines cookie consent?',
    options: [
      'Nothing, they are tracked anyway',
      'They are not tracked at all, so your data undercounts real traffic',
      'They are tracked but anonymized automatically',
      'Their data is delayed by 24 hours',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'When visitors decline cookie consent, analytics tools like GA4 cannot track them. This means your reported numbers are always an undercount of actual traffic. The real number of visitors is higher than what GA4 shows.',
      verifyQuestion: 'If GA4 shows 1000 visitors, the real number is likely...',
      verifyOptions: [
        'Exactly 1000',
        'Higher than 1000, because some visitors declined tracking',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Visitors who decline cookies are invisible to GA4. Your analytics data always undercounts real traffic.',
  },
  {
    id: 'r2q3',
    realm: 2,
    type: 'multiple-choice',
    question: 'In GA4, "Device category" is a...',
    options: ['Metric', 'Dimension', 'Key Event', 'Filter'],
    correctAnswer: 1,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Dimension', 'Metric'],
      items: [
        { text: 'Device category', bucket: 0 },
        { text: 'Bounce rate', bucket: 1 },
        { text: 'Country', bucket: 0 },
        { text: 'Sessions', bucket: 1 },
        { text: 'Traffic source', bucket: 0 },
        { text: 'Average session duration', bucket: 1 },
      ],
    } as SortData,
    explanation:
      'Dimensions are attributes that describe your data (device, country, source). Metrics are the numbers you measure (bounce rate, sessions, duration).',
  },
  {
    id: 'r2q4',
    realm: 2,
    type: 'multiple-choice',
    question: 'In GA4, "Bounce rate" is a...',
    options: ['Dimension', 'Metric', 'Segment', 'Channel'],
    correctAnswer: 1,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Dimension', 'Metric'],
      items: [
        { text: 'Page path', bucket: 0 },
        { text: 'Conversion rate', bucket: 1 },
        { text: 'Browser', bucket: 0 },
        { text: 'Page views', bucket: 1 },
        { text: 'Landing page', bucket: 0 },
        { text: 'Engagement rate', bucket: 1 },
      ],
    } as SortData,
    explanation:
      'Metrics are quantitative measurements (numbers, rates, durations). Dimensions are qualitative attributes that segment your data (device, page, source).',
  },
  {
    id: 'r2q5',
    realm: 2,
    type: 'multiple-choice',
    question: 'What are the three standard report categories in GA4?',
    options: [
      'Users, Sessions, Events',
      'Acquisition, Engagement, Monetization',
      'Traffic, Behavior, Conversions',
      'Audience, Channels, Goals',
    ],
    correctAnswer: 1,
    miniGameType: 'forge',
    miniGameData: {
      template:
        'GA4 standard reports are organized into three categories: ___ (how users arrive), ___ (what users do), and ___ (what users buy).',
      blanks: ['Acquisition', 'Engagement', 'Monetization'],
      distractors: ['Behavior', 'Audience', 'Retention'],
    } as ForgeData,
    explanation:
      'GA4 organizes standard reports into Acquisition (how users find you), Engagement (what they do), and Monetization (revenue and purchases).',
  },
  {
    id: 'r2q6',
    realm: 2,
    type: 'ordering',
    question: 'Put the classic e-commerce funnel steps in order.',
    items: [
      'Checkout',
      'Purchase',
      'Enter site',
      'Add to cart',
      'View product',
    ],
    correctOrder: [2, 4, 3, 0, 1],
    miniGameType: 'forge',
    miniGameData: {
      template:
        'A classic e-commerce funnel: User ___ \u2192 ___ \u2192 ___ \u2192 ___ \u2192 ___.',
      blanks: [
        'enters the site',
        'views a product',
        'adds to cart',
        'goes to checkout',
        'completes purchase',
      ],
      distractors: ['creates account', 'reads reviews', 'contacts support'],
    } as ForgeData,
    explanation:
      'The classic e-commerce funnel: Enter site \u2192 View product \u2192 Add to cart \u2192 Checkout \u2192 Purchase.',
  },
  {
    id: 'r2q7',
    realm: 2,
    type: 'multiple-choice',
    question:
      'Where should you focus design work when analyzing a funnel?',
    options: [
      'The first step, because first impressions matter',
      'The last step, because it is closest to revenue',
      'The step with the biggest drop-off',
      'All steps equally',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'The biggest drop-off in a funnel represents the largest opportunity for improvement. If 80% of users leave at one step, fixing that step has more impact than optimizing a step where only 5% leave.',
      verifyQuestion:
        'A funnel shows 60% drop at step 2 and 10% drop at step 4. Where should you focus?',
      verifyOptions: ['Step 4', 'Step 2'],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Focus on the step with the biggest drop-off. That is where you lose the most users and where design improvements will have the greatest impact.',
  },
  {
    id: 'r2q8',
    realm: 2,
    type: 'multiple-choice',
    question: 'What does Path Exploration in GA4 show?',
    options: [
      'The ideal user journey you designed',
      'How users navigate from page to page, including unexpected paths and dead ends',
      'Only the pages with the highest traffic',
      'A comparison of mobile vs desktop navigation',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Path Exploration visualizes actual user navigation patterns. It reveals not just the happy path but also unexpected routes users take, dead ends where they get stuck, and loops where they go back and forth.',
      verifyQuestion:
        'Does Path Exploration show only the intended user journey?',
      verifyOptions: [
        'Yes, it shows the designed flow',
        'No, it shows actual paths including unexpected ones',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Path Exploration shows how users actually navigate from page to page, revealing unexpected paths and dead ends you might not have anticipated.',
  },
  {
    id: 'r2q9',
    realm: 2,
    type: 'matching',
    question: 'Match each GA4 concept to its definition.',
    leftColumn: ['Session', 'User', 'Event', 'Key Event'],
    rightColumn: [
      'A group of interactions within a time frame',
      'A unique visitor identified by a cookie',
      'Any action taken on the site',
      'A conversion action you define as important',
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Session = a group of interactions within a time window. User = a unique visitor. Event = any action (page view, click, scroll). Key Event = a conversion action you have marked as important (purchase, signup).',
      verifyQuestion: 'What is a "Key Event" in GA4?',
      verifyOptions: [
        'Any click on the page',
        'A conversion action you define as important',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Session = group of interactions, User = unique visitor, Event = action taken, Key Event = conversion action you define as important.',
  },
  {
    id: 'r2q10',
    realm: 2,
    type: 'multiple-choice',
    question:
      'When breaking a funnel down by traffic source, what should you look for?',
    options: [
      'The source with the most total users',
      'The source with the highest revenue',
      'The source with the worst conversion rate at each step',
      'The source with the best bounce rate',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Different traffic sources attract different types of users. By comparing conversion rates per source at each funnel step, you can identify which sources bring low-quality traffic or which steps fail for specific audiences.',
      verifyQuestion:
        'Source A has 10,000 users with 1% conversion. Source B has 500 users with 15% conversion. Which source has a problem?',
      verifyOptions: ['Source B', 'Source A'],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Look for the source with the worst conversion rate at each step. This reveals which traffic sources bring users who struggle or drop off.',
  },

  // ============================================================
  // REALM 3: The Mirror Chamber (Week 3 - Behavioral analysis)
  // ============================================================
  {
    id: 'r3q1',
    realm: 3,
    type: 'multiple-choice',
    question: '"Dead clicks" on a clickmap are...',
    options: [
      'Clicks that happen after the page has loaded',
      'Clicks on elements that are not interactive',
      'Clicks made by bots',
      'Clicks that happen too quickly to register',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Dead clicks occur when users click on something that looks interactive but is not, like an image that looks like a button or text that looks like a link. This reveals misleading visual affordances in your design.',
      verifyQuestion: 'What does a dead click reveal about the design?',
      verifyOptions: [
        'The page loads too slowly',
        'An element looks interactive but is not',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Dead clicks are clicks on elements that are not interactive. They reveal that users expect something to be clickable when it is not.',
  },
  {
    id: 'r3q2',
    realm: 3,
    type: 'multiple-choice',
    question: 'What is the primary purpose of a scrollmap?',
    options: [
      'To track how fast users scroll',
      'To identify where the biggest scroll drop-off is and if key content is above or below it',
      'To measure page load time at different scroll positions',
      'To compare scroll behavior across browsers',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'A scrollmap shows how far down the page users actually scroll. The key insight is finding where the biggest drop-off happens and checking whether important content (CTAs, key information) is above or below that point.',
      verifyQuestion:
        'Your CTA is placed where only 20% of users scroll. What should you do?',
      verifyOptions: [
        'Move the CTA higher on the page',
        'Make the page longer to encourage scrolling',
      ],
      verifyAnswer: 0,
    } as FlashData,
    explanation:
      'A scrollmap identifies where the biggest scroll drop-off occurs and whether key content sits above or below that threshold.',
  },
  {
    id: 'r3q3',
    realm: 3,
    type: 'multiple-choice',
    question:
      'Why do you need to watch many session recordings, not just a few?',
    options: [
      'To fill a weekly report',
      'Because one or two recordings might not show recurring patterns',
      'Because recordings expire after 24 hours',
      'To compare different browsers',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'A single recording shows one user\'s experience. To spot patterns (do many users struggle at the same point?) you need enough recordings to see what repeats. A handful is rarely enough.',
      verifyQuestion: 'You watched 3 recordings and saw no issues. Can you conclude the page is fine?',
      verifyOptions: [
        'Yes, 3 is enough',
        'No, you might have missed a recurring pattern',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Watching many recordings lets you identify recurring patterns. A few recordings might miss problems that only appear when you see enough users.',
  },
  {
    id: 'r3q4',
    realm: 3,
    type: 'multiple-choice',
    question:
      'Which is NOT something you should look for in session recordings?',
    options: [
      'Signs of confusion or hesitation',
      'Rage clicks on unresponsive elements',
      "The user's facial expression",
      'Workarounds users create',
    ],
    correctAnswer: 2,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Look for in recordings', 'Cannot see in recordings'],
      items: [
        { text: 'Rage clicks', bucket: 0 },
        { text: 'Hesitation before clicking', bucket: 0 },
        { text: 'Facial expressions', bucket: 1 },
        { text: 'Unexpected navigation paths', bucket: 0 },
        { text: 'Tone of voice', bucket: 1 },
        { text: 'Form field abandonment', bucket: 0 },
      ],
    } as SortData,
    explanation:
      "Session recordings show cursor movement, clicks, and scrolling, not the user's face or emotions directly. You infer frustration from behavior like rage clicks.",
  },
  {
    id: 'r3q5',
    realm: 3,
    type: 'multiple-choice',
    question:
      'What is the correct hypothesis format taught in the course?',
    options: [
      '"Users don\'t like the design"',
      '"We believe [observation] is caused by [reason] and if we [action] then [outcome]"',
      '"The bounce rate is too high"',
      '"We should redesign the checkout page"',
    ],
    correctAnswer: 1,
    miniGameType: 'forge',
    miniGameData: {
      template:
        'We believe ___ is caused by ___ and if we ___ then ___.',
      blanks: ['[observation]', '[reason]', '[action]', '[outcome]'],
      distractors: ['[assumption]', '[metric]', '[stakeholder]'],
    } as ForgeData,
    explanation:
      'The hypothesis format is: "We believe [observation] is caused by [reason] and if we [action] then [outcome]." This structure forces clear thinking.',
  },
  {
    id: 'r3q6',
    realm: 3,
    type: 'multiple-choice',
    question: 'A page with a high bounce rate is...',
    options: [
      'Always a problem that needs fixing',
      "Not necessarily bad \u2014 it might solve the user's problem instantly",
      'A sign the page loads too slowly',
      'Only a problem on mobile devices',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'A high bounce rate is not always bad. A FAQ page or a contact page may have a high bounce rate because users find what they need and leave satisfied. Context matters \u2014 you need to understand the page\'s purpose.',
      verifyQuestion:
        'A FAQ page has 90% bounce rate. Is this necessarily a problem?',
      verifyOptions: [
        'Yes, high bounce rate always means failure',
        'No, users may have found their answer and left satisfied',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'A high bounce rate is not necessarily bad. Some pages (FAQ, contact info) are designed to solve a problem quickly, so users leave after getting their answer.',
  },
  {
    id: 'r3q7',
    realm: 3,
    type: 'multiple-choice',
    question: '"Rage clicking" indicates...',
    options: [
      'The user is testing the site for bugs',
      'The user is frustrated, clicking repeatedly on an unresponsive element',
      'The user has a fast internet connection',
      'The user is using a touch screen',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Rage clicking is when a user clicks the same element rapidly and repeatedly. It signals frustration \u2014 the user expects something to happen but nothing does. This is a strong signal of a UX problem.',
      verifyQuestion:
        'A user clicks the same button 8 times in 2 seconds. What does this suggest?',
      verifyOptions: [
        'They enjoy clicking',
        'The element is not responding as expected',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Rage clicking means the user is frustrated and clicking repeatedly on an element that is not responding as expected.',
  },
  {
    id: 'r3q8',
    realm: 3,
    type: 'true-false',
    question: 'Clickmaps can replace Google Analytics entirely.',
    options: ['True', 'False'],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Clickmaps and GA4 serve different purposes. Clickmaps show WHERE users click on a specific page. GA4 shows traffic patterns, funnels, acquisition sources, and user journeys across the entire site. You need both.',
      verifyQuestion:
        'Can clickmaps show you where your traffic comes from?',
      verifyOptions: [
        'Yes',
        'No, that requires web analytics like GA4',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Clickmaps show click behavior on individual pages but cannot replace GA4, which provides traffic sources, funnels, user journeys, and site-wide metrics.',
  },
  {
    id: 'r3q9',
    realm: 3,
    type: 'multiple-choice',
    question:
      'Which comparison is specifically recommended when analyzing clickmaps?',
    options: [
      'New users vs returning users',
      'Weekday vs weekend traffic',
      'Desktop vs mobile',
      'Paid vs organic traffic',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Desktop and mobile users interact with pages very differently. Click patterns, scroll depth, and tap targets vary significantly between devices. Comparing desktop vs mobile clickmaps often reveals device-specific UX issues.',
      verifyQuestion:
        'Why compare desktop and mobile clickmaps separately?',
      verifyOptions: [
        'Because mobile has more users',
        'Because interaction patterns differ significantly between devices',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'The course specifically recommends comparing desktop vs mobile clickmaps, since user interaction patterns differ significantly between devices.',
  },
  {
    id: 'r3q10',
    realm: 3,
    type: 'ordering',
    question:
      'Put the behavioral analysis workflow in the correct order.',
    items: [
      'Write hypothesis',
      'Check clickmap/scrollmap',
      'Watch recordings',
      'Look at GA data',
      'Visit actual page',
    ],
    correctOrder: [3, 4, 1, 2, 0],
    miniGameType: 'forge',
    miniGameData: {
      template:
        'Start with ___ to identify problem pages, then ___ yourself, then check ___, then watch ___, and finally write a ___.',
      blanks: [
        'GA data',
        'visit the page',
        'clickmap/scrollmap',
        'recordings',
        'hypothesis',
      ],
      distractors: [
        'stakeholder interview',
        'competitor analysis',
        'wireframe',
      ],
    } as ForgeData,
    explanation:
      'The workflow is: Look at GA data \u2192 Visit actual page \u2192 Check clickmap/scrollmap \u2192 Watch recordings \u2192 Write hypothesis.',
  },

  // ============================================================
  // REALM 4: The Deep Well (Week 4 - Product Analytics)
  // ============================================================
  {
    id: 'r4q1',
    realm: 4,
    type: 'multiple-choice',
    question:
      'What is the key difference between web analytics and product analytics?',
    options: [
      'Web analytics is free, product analytics is paid',
      'Web analytics focuses on acquisition/sales, product analytics on usage/retention',
      'Web analytics is for mobile, product analytics for desktop',
      'There is no real difference',
    ],
    correctAnswer: 1,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Web analytics focus', 'Product analytics focus'],
      items: [
        { text: 'Traffic acquisition', bucket: 0 },
        { text: 'Feature adoption', bucket: 1 },
        { text: 'Conversion funnels', bucket: 0 },
        { text: 'User retention over time', bucket: 1 },
        { text: 'Bounce rate', bucket: 0 },
        { text: 'Aha-moment identification', bucket: 1 },
      ],
    } as SortData,
    explanation:
      'Web analytics (GA4) focuses on acquisition and sales. Product analytics (PostHog) focuses on how users engage with the product over time \u2014 usage and retention.',
  },
  {
    id: 'r4q2',
    realm: 4,
    type: 'multiple-choice',
    question: 'What is an "aha-moment" in product analytics?',
    options: [
      'When the product team discovers a bug',
      "When the user first experiences the product's core value",
      'When the user completes onboarding',
      'When the product reaches market fit',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'The aha-moment is when a user first experiences the core value of a product. For Spotify, it might be finding a song you love. For Tinder, getting your first match. Users who reach the aha-moment are much more likely to stay.',
      verifyQuestion: 'Why is the aha-moment important for retention?',
      verifyOptions: [
        'It triggers a discount offer',
        'Users who experience core value are more likely to stay',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      "The aha-moment is when a user first experiences the product's core value. It is the moment that converts a casual visitor into an engaged user.",
  },
  {
    id: 'r4q3',
    realm: 4,
    type: 'matching',
    question: 'Match each product with its aha-moment.',
    leftColumn: ['Spotify', 'Tinder', 'Miro', 'Bopin'],
    rightColumn: [
      'Find a song you love',
      'Get your first match',
      'Work with someone on a board',
      'Watch YouTube together',
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        "Each product has a unique aha-moment tied to its core value proposition. Spotify = finding music you love, Tinder = mutual attraction (match), Miro = real-time collaboration, Bopin = shared viewing experience.",
      verifyQuestion: "What is Miro's aha-moment?",
      verifyOptions: [
        'Creating a beautiful board',
        'Collaborating with someone in real time',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Spotify = find a song you love, Tinder = first match, Miro = work with someone on a board, Bopin = watch YouTube together.',
  },
  {
    id: 'r4q4',
    realm: 4,
    type: 'multiple-choice',
    question: 'What does a healthy retention curve look like?',
    options: [
      'A straight horizontal line',
      'A continuous downward slope',
      'Drops initially then flattens into a plateau',
      'An upward curve that keeps growing',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'A healthy retention curve drops at first (some users will always leave) but then flattens into a plateau. The plateau represents your core user base \u2014 people who found enough value to keep coming back.',
      verifyQuestion:
        'What does the flat part of a retention curve represent?',
      verifyOptions: [
        'Users who are about to leave',
        'Your core user base that keeps coming back',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'A healthy retention curve drops initially then flattens into a plateau, indicating a stable core user base that continues to use the product.',
  },
  {
    id: 'r4q5',
    realm: 4,
    type: 'multiple-choice',
    question: 'A retention curve that never flattens means...',
    options: [
      'The product is growing rapidly',
      'Users have strong engagement',
      'People try it once and leave',
      'The measurement period is too short',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'If the retention curve keeps dropping without reaching a plateau, it means no group of users is finding enough value to stick around. Everyone eventually leaves \u2014 the product has no loyal user base.',
      verifyQuestion:
        'A retention curve goes from 100% to 0% over 8 weeks. What does this indicate?',
      verifyOptions: [
        'Normal behavior for a seasonal product',
        'The product fails to retain any users long-term',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'A retention curve that never flattens indicates the product fails to retain users \u2014 people try it once and leave without finding lasting value.',
  },
  {
    id: 'r4q6',
    realm: 4,
    type: 'multiple-choice',
    question: 'What are the three levels of the UX pyramid?',
    options: [
      'Visual, Interactive, Emotional',
      'Functional, Usable, Pleasurable',
      'Basic, Standard, Premium',
      'Content, Layout, Style',
    ],
    correctAnswer: 1,
    miniGameType: 'forge',
    miniGameData: {
      template:
        'The UX pyramid has three levels. The base is ___ (does it work?), then ___ (can users accomplish tasks?), and the top is ___ (is it delightful?).',
      blanks: ['Functional', 'Usable', 'Pleasurable'],
      distractors: ['Aesthetic', 'Accessible', 'Responsive'],
    } as ForgeData,
    explanation:
      'The UX pyramid levels from bottom to top: Functional (it works), Usable (users can accomplish tasks), Pleasurable (it delights).',
  },
  {
    id: 'r4q7',
    realm: 4,
    type: 'multiple-choice',
    question: 'Bugs belong to which UX pyramid level?',
    options: ['Pleasurable', 'Usable', 'Functional', 'None of the levels'],
    correctAnswer: 2,
    miniGameType: 'sort',
    miniGameData: {
      buckets: ['Functional', 'Usable', 'Pleasurable'],
      items: [
        { text: 'Broken checkout button', bucket: 0 },
        { text: 'Confusing navigation labels', bucket: 1 },
        { text: 'Delightful loading animation', bucket: 2 },
        { text: 'Page crashes on submit', bucket: 0 },
        { text: 'Form lacks input validation hints', bucket: 1 },
        { text: 'Personalized welcome message', bucket: 2 },
      ],
    } as SortData,
    explanation:
      'Bugs are functional issues \u2014 they prevent the product from working correctly. They belong at the base of the UX pyramid.',
  },
  {
    id: 'r4q8',
    realm: 4,
    type: 'multiple-choice',
    question:
      'What is the main question web analytics (GA4) answers vs product analytics (PostHog)?',
    options: [
      'GA4: "How do people buy?" / PostHog: "What makes people stay?"',
      'GA4: "What makes people stay?" / PostHog: "How do people buy?"',
      'GA4: "What features exist?" / PostHog: "What pages exist?"',
      'They answer the same questions',
    ],
    correctAnswer: 0,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'GA4 focuses on acquisition and purchase behavior: where visitors come from, what they browse, and whether they buy. PostHog focuses on product usage: what features people use, where they get stuck, and whether they come back.',
      verifyQuestion:
        '"Do users come back after their first week?" is a question for...',
      verifyOptions: [
        'Web analytics (GA4)',
        'Product analytics (PostHog)',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'GA4 answers "How do people buy?" (acquisition, conversion). PostHog answers "What makes people stay?" (usage, retention).',
  },
  {
    id: 'r4q9',
    realm: 4,
    type: 'multiple-choice',
    question: 'What is a "cohort" in product analytics?',
    options: [
      'A type of chart used for visualization',
      'A group of users who started in the same time period',
      'A feature flag configuration',
      'A specific user segment based on device type',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'A cohort is a group of users who share a common starting point in time, for example all users who signed up in March. By tracking cohorts separately, you can see if retention is improving over time as you make product changes.',
      verifyQuestion: 'Why track users in cohorts?',
      verifyOptions: [
        'To compare retention across different sign-up periods',
        'To reduce server costs',
      ],
      verifyAnswer: 0,
    } as FlashData,
    explanation:
      'A cohort is a group of users who started in the same time period. Cohort analysis lets you compare retention across different groups to see if the product is improving.',
  },
  {
    id: 'r4q10',
    realm: 4,
    type: 'multiple-choice',
    question:
      'When an app is broken and buggy, what should the UX priority be?',
    options: [
      'Add new features to attract users',
      'Redesign the visual identity',
      'Triage: fix functional issues before adding features',
      'Run A/B tests to see if bugs matter',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'When the product has fundamental functional problems (bugs, crashes), adding features or polishing visuals is pointless. You must triage: fix what is broken first. This aligns with the UX pyramid \u2014 functional is the foundation.',
      verifyQuestion:
        'An app crashes 30% of the time. Should you prioritize a redesign or fixing crashes?',
      verifyOptions: [
        'Redesign to attract new users',
        'Fix the crashes first',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'When the product is broken, triage is the priority: fix functional issues before investing in features or visual polish. The UX pyramid demands a solid foundation.',
  },

  // ============================================================
  // REALM 5: The Oracle's Trial (Week 5 - AI)
  // ============================================================
  {
    id: 'r5q1',
    realm: 5,
    type: 'multiple-choice',
    question:
      'Why should you learn analytics manually before using AI?',
    options: [
      'AI tools are too expensive for beginners',
      'So you can recognize when AI is wrong',
      'Manual analysis is always more accurate',
      'AI is not allowed in academic settings',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'If you rely on AI without understanding the fundamentals, you cannot tell when AI makes a mistake. Learning manually first builds the judgment needed to evaluate AI output critically.',
      verifyQuestion:
        'What risk does relying on AI without foundational knowledge create?',
      verifyOptions: [
        'Higher subscription costs',
        'Inability to spot errors in AI output',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Learning manually first gives you the knowledge to recognize when AI makes mistakes. Without that foundation, you cannot critically evaluate AI output.',
  },
  {
    id: 'r5q2',
    realm: 5,
    type: 'multiple-choice',
    question: 'What does AI "hallucination" mean?',
    options: [
      'The AI sees images that are not there',
      'The AI is confidently wrong',
      'The AI crashes and shows errors',
      'The AI generates creative ideas',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'AI hallucination means the model generates information that sounds plausible and is stated with confidence, but is factually incorrect. It does not know it is wrong \u2014 it produces false statements as if they were true.',
      verifyQuestion:
        'An AI states a fake statistic with full confidence. This is called...',
      verifyOptions: ['A bug', 'A hallucination'],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'AI hallucination means being confidently wrong \u2014 the AI generates plausible-sounding but factually incorrect information without any indication of uncertainty.',
  },
  {
    id: 'r5q3',
    realm: 5,
    type: 'multiple-choice',
    question: 'What does AI "sycophancy" mean?',
    options: [
      'The AI refuses to answer questions',
      'The AI gives overly technical answers',
      'The AI agrees and praises you even when your ideas are not good',
      'The AI copies your writing style',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Sycophancy is when AI tells you what you want to hear instead of what you need to hear. It agrees with your ideas, praises your work, and avoids challenging your assumptions \u2014 even when critical feedback would be more helpful.',
      verifyQuestion:
        'You show AI a flawed design and it says "Great work!" This is...',
      verifyOptions: ['Helpful positive feedback', 'Sycophancy'],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'AI sycophancy means the AI agrees and praises even when ideas are not good, telling you what you want to hear instead of providing honest critical feedback.',
  },
  {
    id: 'r5q4',
    realm: 5,
    type: 'true-false',
    question:
      'You should upload sensitive customer data directly to AI tools.',
    options: ['True', 'False'],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        "Uploading sensitive customer data to AI tools is a privacy and security risk. AI services may store, log, or use your data for training. Always anonymize data before using AI, and follow your organization's data handling policies.",
      verifyQuestion:
        'What should you do with customer data before using AI?',
      verifyOptions: [
        'Upload it directly for best results',
        'Anonymize it first',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'Never upload sensitive customer data directly to AI tools. Always anonymize data first to protect user privacy and comply with data protection regulations.',
  },
  {
    id: 'r5q5',
    realm: 5,
    type: 'multiple-choice',
    question:
      'What should you be cautious about with AI-suggested follow-up prompts?',
    options: [
      'They cost extra credits',
      'They can replace your own thinking',
      'They are always irrelevant',
      'They contain hidden advertisements',
    ],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        "AI-suggested follow-up prompts are convenient but can lead you down the AI's path rather than your own. If you always click suggested prompts instead of formulating your own questions, the AI is driving the analysis rather than you.",
      verifyQuestion:
        'What is the risk of always using AI-suggested follow-ups?',
      verifyOptions: [
        'Higher costs',
        'The AI steers your thinking instead of you steering the analysis',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'AI-suggested follow-up prompts can replace your own thinking. Be cautious \u2014 you should drive the analysis, not let the AI decide what questions to ask.',
  },
  {
    id: 'r5q6',
    realm: 5,
    type: 'multiple-choice',
    question:
      'What did the custom instructions exercise demonstrate?',
    options: [
      'AI cannot be customized',
      'Custom instructions slow down AI responses',
      'Custom instructions can shape AI behavior and improve output',
      'All AI tools have identical default behavior',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'The exercise showed that giving AI specific instructions about your role, preferred format, tone, and constraints significantly improves the relevance and quality of its output. Custom instructions shape how the AI behaves.',
      verifyQuestion: 'Custom instructions affect...',
      verifyOptions: [
        'Only the speed of responses',
        'The behavior, tone, and quality of AI output',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'The custom instructions exercise showed that well-crafted instructions can shape AI behavior and significantly improve the quality and relevance of its output.',
  },
  {
    id: 'r5q7',
    realm: 5,
    type: 'ordering',
    question:
      'Put the AI-assisted redesign workflow in the correct order.',
    items: [
      'Get feedback',
      'Gather insights',
      'Set up A/B test',
      'Create prompt',
      'Publish/import to Figma',
    ],
    correctOrder: [1, 3, 4, 0, 2],
    miniGameType: 'forge',
    miniGameData: {
      template:
        'First ___ from analytics, then ___ for the AI, then ___ the result, then ___ from stakeholders, and finally ___.',
      blanks: [
        'gather insights',
        'create a prompt',
        'publish/import to Figma',
        'get feedback',
        'set up an A/B test',
      ],
      distractors: [
        'write documentation',
        'run usability tests',
        'present to executives',
      ],
    } as ForgeData,
    explanation:
      'The AI redesign workflow: Gather insights \u2192 Create prompt \u2192 Publish/import to Figma \u2192 Get feedback \u2192 Set up A/B test.',
  },
  {
    id: 'r5q8',
    realm: 5,
    type: 'multiple-choice',
    question: 'What is the "post-AI feeling"?',
    options: [
      'Excitement about AI capabilities',
      'Boredom from repetitive AI tasks',
      'Discomfort of AI being faster or better than you',
      'Confusion about which AI tool to use',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'The post-AI feeling is the discomfort that comes when AI produces work faster or seemingly better than you can. It can make designers question their value and skills. The course acknowledges this is a natural reaction.',
      verifyQuestion:
        'Is the post-AI feeling a sign you should stop using AI?',
      verifyOptions: [
        'Yes, it means AI is not for you',
        'No, it is a natural reaction to adapt through',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'The post-AI feeling is the discomfort you experience when AI seems faster or better than you. It is a natural reaction that many designers experience.',
  },
  {
    id: 'r5q9',
    realm: 5,
    type: 'multiple-choice',
    question:
      'What is the advice for overcoming the post-AI feeling?',
    options: [
      'Stop using AI entirely',
      'Specialize in tasks AI cannot do',
      'Go way bigger \u2014 fix the funnel, not just a page',
      'Learn to code instead',
    ],
    correctAnswer: 2,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'Instead of competing with AI on execution speed, think bigger. AI can redesign a page, but understanding the entire funnel, connecting business goals with user needs, and driving strategic change is where human UX professionals add unique value.',
      verifyQuestion:
        'If AI can redesign a page in minutes, what should a UX designer focus on?',
      verifyOptions: [
        'Redesigning pages faster than AI',
        'Strategic thinking across the entire user journey',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'The advice is to go way bigger \u2014 fix the entire funnel, not just a single page. Think strategically where AI cannot replace your judgment.',
  },
  {
    id: 'r5q10',
    realm: 5,
    type: 'true-false',
    question:
      'AI-generated graphs should be trusted because they look professional.',
    options: ['True', 'False'],
    correctAnswer: 1,
    miniGameType: 'flash',
    miniGameData: {
      explanation:
        'AI can generate professional-looking charts and graphs with completely fabricated data. A polished appearance does not guarantee accuracy. Always verify the underlying data and methodology before trusting any AI-generated visualization.',
      verifyQuestion:
        'An AI produces a beautiful chart with specific numbers. Should you...',
      verifyOptions: [
        'Trust it because it looks accurate',
        'Verify the data before using it',
      ],
      verifyAnswer: 1,
    } as FlashData,
    explanation:
      'AI-generated graphs can look professional while containing fabricated data. Always verify the underlying data \u2014 appearance does not equal accuracy.',
  },
];
