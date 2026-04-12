from pathlib import Path

import pandas as pd


OUT = Path("analysis_output_2026-04-10")
OUT.mkdir(exist_ok=True)

CAMPAIGN = "Bangalore_Search_Leads_Vicky"
FINAL_URL = "https://vickysafetynets.co.in/"
PHONE = "+91 7795891177"


def build_campaign() -> pd.DataFrame:
    return pd.DataFrame(
        [
            {
                "Row Type": "Campaign",
                "Action": "Add",
                "Campaign status": "Paused",
                "Campaign": CAMPAIGN,
                "Campaign type": "Search",
                "Networks": "Google search; Search partners",
                "Budget": 1000,
                "Delivery method": "Standard",
                "Budget type": "Daily",
                "Bid strategy type": "Maximize clicks",
                "Campaign start date": "2026-04-10",
                "Language": "en; kn; hi",
                "Location": "Bengaluru,Karnataka,India",
                "Devices": "Computers:-10%; Mobile devices with full browsers:+20%; Tablets with full browsers:-20%",
                "EU political ads": "No",
            }
        ]
    )


def build_adgroups() -> pd.DataFrame:
    ad_groups = [
        "Core_Safety_Nets",
        "Balcony_Child_Safety",
        "Bird_Pigeon_Nets",
        "Sports_Nets",
        "Urgent_NearMe",
    ]
    return pd.DataFrame(
        {
            "Row Type": "Ad group",
            "Action": "Add",
            "Ad group status": "Enabled",
            "Campaign": CAMPAIGN,
            "Ad group": ad_groups,
        }
    )


def build_keywords() -> pd.DataFrame:
    rows = [
        ("Core_Safety_Nets", "safety nets bangalore", "Phrase match"),
        ("Core_Safety_Nets", "safety net installation bangalore", "Phrase match"),
        ("Core_Safety_Nets", "building safety nets bangalore", "Phrase match"),
        ("Core_Safety_Nets", "duct area safety nets bangalore", "Phrase match"),
        ("Core_Safety_Nets", "staircase safety nets bangalore", "Phrase match"),
        ("Core_Safety_Nets", "industrial safety nets bangalore", "Phrase match"),
        ("Balcony_Child_Safety", "balcony safety nets bangalore", "Phrase match"),
        ("Balcony_Child_Safety", "kids safety nets for balcony", "Phrase match"),
        ("Balcony_Child_Safety", "child safety nets bangalore", "Phrase match"),
        ("Balcony_Child_Safety", "grill balcony safety nets", "Phrase match"),
        ("Balcony_Child_Safety", "pets safety nets bangalore", "Phrase match"),
        ("Bird_Pigeon_Nets", "pigeon nets bangalore", "Phrase match"),
        ("Bird_Pigeon_Nets", "pigeon net installation bangalore", "Phrase match"),
        ("Bird_Pigeon_Nets", "bird protection nets bangalore", "Phrase match"),
        ("Bird_Pigeon_Nets", "anti bird nets bangalore", "Phrase match"),
        ("Bird_Pigeon_Nets", "bird spikes bangalore", "Phrase match"),
        ("Bird_Pigeon_Nets", "pigeon nets for balconies", "Phrase match"),
        ("Sports_Nets", "sports nets installation bangalore", "Phrase match"),
        ("Sports_Nets", "cricket practice nets bangalore", "Phrase match"),
        ("Sports_Nets", "football stop netting bangalore", "Phrase match"),
        ("Sports_Nets", "ball stop nets bangalore", "Phrase match"),
        ("Urgent_NearMe", "safety nets near me", "Phrase match"),
        ("Urgent_NearMe", "pigeon net near me", "Phrase match"),
        ("Urgent_NearMe", "balcony net installation near me", "Phrase match"),
        ("Urgent_NearMe", "bird net installation near me", "Phrase match"),
        ("Urgent_NearMe", "same day safety net installation", "Phrase match"),
        ("Core_Safety_Nets", "safety nets bangalore", "Exact match"),
        ("Balcony_Child_Safety", "balcony safety nets bangalore", "Exact match"),
        ("Bird_Pigeon_Nets", "pigeon net installation bangalore", "Exact match"),
        ("Bird_Pigeon_Nets", "bird spikes bangalore", "Exact match"),
        ("Sports_Nets", "sports nets installation bangalore", "Exact match"),
        ("Urgent_NearMe", "safety nets near me", "Exact match"),
    ]
    return pd.DataFrame(
        {
            "Row Type": "Keyword",
            "Action": "Add",
            "Keyword status": "Enabled",
            "Campaign": CAMPAIGN,
            "Ad group": [r[0] for r in rows],
            "Keyword": [r[1] for r in rows],
            "Type": [r[2] for r in rows],
            "Final URL": FINAL_URL,
        }
    )


def build_negatives() -> pd.DataFrame:
    negatives = [
        "job",
        "jobs",
        "career",
        "salary",
        "vacancy",
        "hiring",
        "recruitment",
        "training",
        "course",
        "diy",
        "how to",
        "youtube",
        "video",
        "pdf",
        "manual",
        "diagram",
        "drawing",
        "images",
        "wallpaper",
        "amazon",
        "flipkart",
        "meesho",
        "olx",
        "wholesale",
        "manufacturer",
        "supplier",
        "raw material",
        "cheap",
        "discount",
        "price list",
        "fishing net",
        "hair net",
        "badminton net",
        "volleyball net",
        "tennis net",
        "cricket score",
        "live match",
        "delhi",
        "hyderabad",
        "mumbai",
        "chennai",
        "kolkata",
        "pune",
    ]
    return pd.DataFrame(
        {
            "Row Type": "Negative keyword",
            "Action": "Add",
            "Keyword status": "Enabled",
            "Level": "Campaign",
            "Campaign": CAMPAIGN,
            "Negative keyword": negatives,
            "Type": "Phrase match",
        }
    )


def cap(text: str, n: int) -> str:
    return str(text).strip()[:n]


def rsa_row(ad_group: str, h: list[str], d: list[str], p1: str, p2: str) -> dict[str, str]:
    row: dict[str, str] = {
        "Row Type": "Ad",
        "Action": "Add",
        "Ad status": "Enabled",
        "Campaign": CAMPAIGN,
        "Ad group": ad_group,
        "Ad type": "Responsive search ad",
        "Final URL": FINAL_URL,
        "Path 1": cap(p1, 15),
        "Path 2": cap(p2, 15),
    }
    hh = [cap(x, 30) for x in h]
    dd = [cap(x, 90) for x in d]
    while len(hh) < 15:
        hh.append("")
    while len(dd) < 4:
        dd.append("")
    for i in range(15):
        row[f"Headline {i+1}"] = hh[i]
    for i in range(4):
        row[f"Description {i+1}"] = dd[i]
    # Keep all pin positions blank to avoid unsupported-value upload errors.
    for i in range(1, 16):
        row[f"Headline {i} position"] = ""
    for i in range(1, 5):
        row[f"Description {i} position"] = ""
    return row


def build_rsa() -> pd.DataFrame:
    rows = [
        rsa_row(
            "Core_Safety_Nets",
            [
                "Safety Nets Bangalore",
                "Free Site Visit Today",
                "Trusted Safety Net Experts",
                "UV Resistant Quality Nets",
                "Quick Installation Service",
                "Call For Fast Quote",
                "Affordable Net Solutions",
            ],
            [
                "Premium safety net installation in Bangalore for homes and buildings.",
                "Call now for free site visit, exact measurement, and quick quote.",
                "Experienced team, strong fittings, clean and reliable installation.",
                "Balcony, duct area, terrace, staircase, and building safety solutions.",
            ],
            "safety-nets",
            "bangalore",
        ),
        rsa_row(
            "Balcony_Child_Safety",
            [
                "Balcony Safety Nets",
                "Child Safety Nets Bangalore",
                "Protect Kids And Pets",
                "Same Day Installation",
                "Secure Balcony Solutions",
                "Get Quote On Call",
                "Free Measurement Visit",
            ],
            [
                "Balcony and child safety nets with durable material and neat finish.",
                "Protect children and pets from balcony falls in high-rise apartments.",
                "Fast service in Bangalore with transparent pricing and quality support.",
                "Book a free site inspection and installation consultation today.",
            ],
            "balcony-nets",
            "child-safety",
        ),
        rsa_row(
            "Bird_Pigeon_Nets",
            [
                "Pigeon Nets Bangalore",
                "Bird Protection Nets",
                "Pigeon Net Installation",
                "Bird Spikes Available",
                "Humane Bird Control",
                "Quick Service Near You",
                "Call For Pigeon Net Quote",
            ],
            [
                "Pigeon and bird net installation for balconies, windows, and open areas.",
                "Stop bird mess and nesting with durable, weather-resistant protection nets.",
                "Professional fitting by experts with clean and secure installation.",
                "Call now for free site visit and fast pricing in Bangalore.",
            ],
            "pigeon-nets",
            "bird-control",
        ),
        rsa_row(
            "Sports_Nets",
            [
                "Sports Nets Bangalore",
                "Cricket Practice Nets",
                "Football Stop Netting",
                "Ball Stop Nets Installation",
                "Custom Sports Net Setup",
                "School Academy Solutions",
                "Call For Site Visit",
            ],
            [
                "Sports net installation for cricket, football, and multi-sport grounds.",
                "Custom net solutions for schools, academies, and residential projects.",
                "Durable materials, professional setup, and reliable installation support.",
                "Get a quick quote and schedule a free inspection in Bangalore.",
            ],
            "sports-nets",
            "installation",
        ),
        rsa_row(
            "Urgent_NearMe",
            [
                "Safety Nets Near Me",
                "Urgent Net Installation",
                "Same Day Service",
                "Call Now Bangalore Team",
                "Fast Site Visit Today",
                "Quick Price Estimate",
                "Book Technician Now",
            ],
            [
                "Need urgent safety net installation near you? Call now for fast support.",
                "Same-day site visit available in many Bangalore areas.",
                "Perfect for emergency balcony, pigeon, and child safety needs.",
                "Trusted local team with quick response and quality installation.",
            ],
            "near-me",
            "urgent-service",
        ),
    ]
    return pd.DataFrame(rows)


def write_checklist() -> None:
    text = f"""# Vicky Google Ads Launch Checklist

Campaign: {CAMPAIGN}
Final URL domain: https://vickysafetynets.co.in/
Primary call number: {PHONE}

## Upload Order
1. campaign_upload_fixed.xlsx
2. adgroup_upload_fixed.xlsx
3. keyword_upload_fixed.xlsx
4. negative_keyword_upload_fixed.xlsx
5. rsa_ads_upload_fixed_nopin.xlsx

## Important Settings
- Daily budget: INR 1000
- Bidding at launch: Maximize Clicks with CPC control by search terms
- Geo: Bangalore only (presence)
- Languages: English, Kannada, Hindi
- Schedule: 06:00 to 22:00
- Device bias: Mobile +20%

## Tracking
- Create and validate `call_click` event in GTM.
- Create and validate `contact_form_submit` event in GTM.
- Import both as conversions in Google Ads before scaling.
"""
    (OUT / "vicky_google_ads_launch_checklist.md").write_text(text, encoding="utf-8")


def main() -> None:
    campaign = build_campaign()
    adgroups = build_adgroups()
    keywords = build_keywords()
    negatives = build_negatives()
    rsa = build_rsa()

    campaign.to_csv(OUT / "campaign_upload_fixed.xlsx.csv", index=False)
    campaign.to_excel(OUT / "campaign_upload_fixed.xlsx", index=False)

    adgroups.to_csv(OUT / "adgroup_upload_fixed.csv", index=False)
    adgroups.to_excel(OUT / "adgroup_upload_fixed.xlsx", index=False)

    keywords.to_csv(OUT / "keyword_upload_fixed.csv", index=False)
    keywords.to_excel(OUT / "keyword_upload_fixed.xlsx", index=False)

    negatives.to_csv(OUT / "negative_keyword_upload_fixed.csv", index=False)
    negatives.to_excel(OUT / "negative_keyword_upload_fixed.xlsx", index=False)

    rsa.to_csv(OUT / "rsa_ads_upload_fixed_nopin.csv", index=False)
    rsa.to_excel(OUT / "rsa_ads_upload_fixed_nopin.xlsx", index=False)

    write_checklist()

    print("Created Vicky ads pack in", OUT)


if __name__ == "__main__":
    main()
