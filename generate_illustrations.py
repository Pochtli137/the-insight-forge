#!/usr/bin/env python3
"""
Generate 50 unique fantasy illustrations for The Insight Forge quiz game.
Style: Detailed black-and-white pen-and-ink, crosshatching, whimsical fantasy
characters with burlesk proportions, inspired by classic gamebook illustration.
"""

import os
import time
from google import genai
from google.genai import types

import dotenv
# Try multiple env files for the API key
for env_path in ['.env', '../allears/.env', '../school-digest/.env']:
    full = os.path.join(os.path.dirname(__file__), env_path)
    if os.path.exists(full):
        dotenv.load_dotenv(full)

api_key = os.environ.get("GOOGLE_API_KEY") or os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("ERROR: No Google/Gemini API key found")
    exit(1)

client = genai.Client(api_key=api_key)
OUT_DIR = os.path.join(os.path.dirname(__file__), "public", "illustrations")
os.makedirs(OUT_DIR, exist_ok=True)

STYLE = (
    "Detailed black-and-white pen-and-ink fantasy illustration with dense crosshatching. "
    "Whimsical, burlesk proportions on the characters. Richly detailed armor, clothing, pouches, and accessories. "
    "Classic gamebook illustration style. High contrast, no grey tones, only black ink on white paper. "
    "Fantastical medieval setting."
)

# Each question gets a unique scene description
PROMPTS = {
    # REALM 1: The Threshold of Seeing (Intro / Qual vs Quant)
    "r1q1": "A stout dwarven scholar holding up a scroll with a speech bubble, examining it through a magnifying glass. A worried merchant stands beside him gesturing emotionally. The setting is a cluttered study with books and quills.",
    "r1q2": "A gnome accountant sitting at a desk covered in ledgers and charts, counting coins with an abacus. Numbers float in the air around them like magical symbols.",
    "r1q3": "Two wizards back to back - one holding a crystal ball showing feelings and emotions, the other holding a crystal ball showing numbers and graphs. Their magic streams merge above them into a single bright truth.",
    "r1q4": "A knight presenting a triptych panel to a queen: the first panel shows raw evidence, the second shows a lightbulb moment, the third shows a blueprint for a new castle design.",
    "r1q5": "A wandering merchant displaying four magical tools on a velvet cloth at a market stall. Three glow with power, one is clearly fake and dusty. A suspicious elf inspects them.",
    "r1q6": "A witch peering into a bubbling cauldron that shows ghostly images of people walking through a marketplace - heatmap-like glowing footprints on the ground.",
    "r1q7": "A cartographer carefully arranging three sacred scrolls in the correct order on a stone altar. Runes glow as each scroll is placed correctly.",
    "r1q8": "A wise old seer sitting cross-legged at a crossroads, pointing in all directions. Signs point to 'Research', 'Design', 'Test', 'Build'. The seer says 'All paths lead here.'",
    "r1q9": "A burly tavern keeper leaning over the bar, whispering secrets to a hooded investigator. Behind them, a line of angry customers shout complaints that float as text bubbles.",
    "r1q10": "A halfling reading customer reviews carved into a stone wall outside a shop. Some reviews glow gold (positive), others glow red (negative). The shopkeeper peeks nervously from the window.",

    # REALM 2: The Counting House (GA4 / Metrics)
    "r2q1": "A grand counting house with three levels: tiny people (users) entering through a door, sitting down at tables (sessions), and reading individual pages from books (page views). A clerk tracks all three.",
    "r2q2": "A gatekeeper at a castle entrance holding a consent scroll. Some visitors sign happily, others refuse and walk away into mist. The gatekeeper looks worried at how many leave.",
    "r2q3": "A librarian sorting scrolls into two piles - one labeled 'What they ARE' (dimensions) with scrolls showing 'mobile', 'desktop', 'country'. The other labeled 'How MUCH' (metrics) with scrolls showing numbers.",
    "r2q4": "Same librarian as above but now holding up a single scroll labeled 'Bounce Rate' with a big number on it, placing it firmly in the 'How Much' pile with a satisfied nod.",
    "r2q5": "Three doors in a grand hall, each with a glowing sign: 'Where they came from' (Acquisition), 'What they did' (Engagement), 'What they bought' (Monetization). A confused adventurer choosing.",
    "r2q6": "A dramatic funnel carved from stone in a cathedral - people pour in at the wide top, and at each narrowing stage some fall off the edges. A engineer points at the widest gap.",
    "r2q7": "A general studying a battle map showing troop movements through a canyon with chokepoints. Arrows show where the biggest losses occur. The general marks the critical point with a flag.",
    "r2q8": "A ranger tracking footprints through a forest, seeing where paths diverge, loop back, and dead-end. Some paths lead to treasure (conversion), most lead nowhere.",
    "r2q9": "Four scholars at a round table, each holding a card: 'Session', 'User', 'Event', 'Key Event'. They're trying to match each card to its definition written on the table.",
    "r2q10": "A spy master examining three messenger birds, each from a different kingdom (traffic source). One bird is sick and weak (bad source). The spy master inspects which messages they carry.",

    # REALM 3: The Mirror Chamber (Behavioral / Heatmaps / Recordings)
    "r3q1": "A ghost clicking furiously on a painting in a gallery, but their hand passes through - the painting isn't a door. Other ghosts watch confused. A detective takes notes.",
    "r3q2": "A long tapestry hanging on a castle wall. Most observers only see the top third. The bottom, containing the treasure map, hangs in darkness unseen. A scholar measures where eyes stop.",
    "r3q3": "A wizard watching 25 crystal balls simultaneously, each showing a tiny person navigating a maze. The wizard tallies patterns on a chalkboard: 'lost', 'found', 'gave up'.",
    "r3q4": "A detective's evidence board with four suspects pinned to it. Three are real behavioral clues (confusion, clicks, scrolling). The fourth is absurd - a person's face - crossed out as 'not observable'.",
    "r3q5": "A philosopher inscribing a sacred formula on a stone tablet: 'We believe... is caused by... and if we... then... should follow.' An apprentice watches reverently.",
    "r3q6": "A shopkeeper standing in an empty shop looking puzzled. A sign says 'High Bounce Rate'. But a wise counselor shows that customers came in, got exactly what they needed instantly, and left satisfied.",
    "r3q7": "A furious dwarf hammering repeatedly on a locked treasure chest that won't open. Sparks fly. Other dwarves back away. The lock was never meant to be a lock - it's decorative.",
    "r3q8": "A debate in a grand hall - one faction holds a chart (quantitative), the other holds a mirror (qualitative). A mediator shows they need BOTH, holding them together.",
    "r3q9": "Two mirrors side by side in a chamber - one large (desktop) and one small (mobile). The reflections show completely different behaviors. An analyst compares them with keen interest.",
    "r3q10": "A methodical alchemist following a precise recipe: step 1 reading a ledger, step 2 visiting the scene, step 3 examining heat marks, step 4 watching echoes, step 5 writing a hypothesis.",

    # REALM 4: The Deep Well (Product Analytics / Retention)
    "r4q1": "Two guild halls side by side. The merchant guild (web analytics) counts coins and foot traffic. The artisan guild (product analytics) studies who keeps coming back to use their tools.",
    "r4q2": "A moment of pure revelation - an adventurer opens a magical music box for the first time and is struck by wonder. Light radiates from the box. This is the 'aha moment'.",
    "r4q3": "Four vignettes: a bard finding the perfect song, two people matching at a masquerade ball, collaborators meeting at a workshop table, friends watching a magic lantern show together.",
    "r4q4": "A graph carved into cliff face showing a waterfall that drops sharply then levels into a calm plateau. Settlers live on the plateau. The cliff is steep but survivable.",
    "r4q5": "Same cliff but the waterfall never stops falling - it goes straight down into an abyss. No plateau. No settlers. Just endless descent. A warning sign reads 'No one returns.'",
    "r4q6": "A pyramid being built by workers. The base is labeled 'Does it work?', the middle 'Is it easy?', the top 'Is it delightful?'. Workers are still struggling with the base.",
    "r4q7": "A knight trying to polish a castle tower while the foundation crumbles. A wise builder redirects them: 'Fix the foundation first!' Bugs crawl out of the cracks.",
    "r4q8": "A merchant with an hourglass (sessions) and an artisan with a portrait locket (users). They see the same customer differently. The merchant counts visits, the artisan remembers faces.",
    "r4q9": "A group of pilgrims who all started their journey on the same day, walking together in a line. Some peel off each day. A chronicler marks which cohort they belong to.",
    "r4q10": "A healer performing triage on a battlefield - sorting the wounded into 'fix now' (bugs), 'fix soon' (usability), and 'nice to have' (features). The most critical cases first.",

    # REALM 5: The Oracle's Trial (AI)
    "r5q1": "A young apprentice doing hard manual labor (hand-analyzing scrolls) while an older master watches approvingly. In the background, an oracle machine sits idle. 'First learn the hard way.'",
    "r5q2": "A pompous oracle on a throne, speaking confidently from a glowing book. But the book's pages are blank - the oracle is making it all up. Tiny 'hallucination bubbles' float from its head.",
    "r5q3": "The same oracle now flattering a warrior, bowing and praising their obviously terrible battle plan. The warrior's map is upside down. The oracle says 'Brilliant strategy, my lord!'",
    "r5q4": "A rogue trying to feed sensitive secret documents into a magical oracle machine. A guard slaps their hand away: 'Clean the data first!' Secret symbols fall from the documents.",
    "r5q5": "An oracle whispering follow-up questions into an adventurer's ear, replacing their own thoughts. The adventurer's own thought bubbles fade while the oracle's grow larger.",
    "r5q6": "A craftsperson carefully adjusting knobs and dials on an oracle machine, customizing its behavior. Before: generic unhelpful answers. After: precise, useful responses.",
    "r5q7": "A production line showing five stations: gathering ingredients, mixing the potion, pouring into a mold, getting feedback, testing in battle. Each station is manned by a specialist.",
    "r5q8": "A warrior sitting alone after battle, looking at their hands. An oracle did all the fighting. The warrior won but feels hollow. 'The victory wasn't mine.'",
    "r5q9": "Same warrior, now standing tall on a mountain peak. Instead of fixing one brick in a wall, they redesigned the entire fortress. The oracle assists but the vision is human.",
    "r5q10": "A judge examining two identical-looking scrolls. One contains real data, beautifully charted. The other is AI-fabricated nonsense, equally beautiful. The judge squints with suspicion.",
}

def generate_image(prompt_id: str, scene: str):
    out_path = os.path.join(OUT_DIR, f"{prompt_id}.png")
    if os.path.exists(out_path):
        print(f"  SKIP {prompt_id} (exists)")
        return

    full_prompt = f"{STYLE}\n\nScene: {scene}"

    print(f"  Generating {prompt_id}...", end=" ", flush=True)
    try:
        response = client.models.generate_images(
            model="imagen-4.0-generate-001",
            prompt=full_prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="1:1",
            ),
        )

        if response.generated_images:
            img = response.generated_images[0]
            with open(out_path, "wb") as f:
                f.write(img.image.image_bytes)
            print("done")
        else:
            print("FAILED (no images returned)")
    except Exception as e:
        print(f"FAILED: {e}")


def main():
    print(f"Generating {len(PROMPTS)} illustrations...\n")

    for i, (prompt_id, scene) in enumerate(PROMPTS.items()):
        generate_image(prompt_id, scene)

        # Rate limiting
        if (i + 1) % 5 == 0 and i + 1 < len(PROMPTS):
            print(f"  ({i+1}/{len(PROMPTS)} done, pausing...)")
            time.sleep(3)

    print(f"\nDone! Images saved to {OUT_DIR}/")


if __name__ == "__main__":
    main()
