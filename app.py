from flask import Flask, render_template, request
import urllib.parse

app = Flask(__name__)

PLANET_PROMPTS = {
    "mercury": "realistic planet Mercury, rocky surface, space",
    "venus": "planet Venus, thick clouds, glowing atmosphere",
    "earth": "planet Earth from space, blue oceans, clouds",
    "mars": "planet Mars, red dusty surface, realistic",
    "jupiter": "planet Jupiter, gas giant, great red spot",
    "saturn": "planet Saturn, detailed rings, realistic space",
    "uranus": "planet Uranus, icy blue gas giant",
    "neptune": "planet Neptune, deep blue, storms"
}

@app.route("/", methods=["GET", "POST"])
def index():
    image_url = None

    if request.method == "POST":
        planet = request.form["planet"].lower().strip()
        prompt = PLANET_PROMPTS.get(
            planet, f"realistic planet {planet}, space background"
        )

        encoded_prompt = urllib.parse.quote(prompt)
        image_url = f"https://image.pollinations.ai/prompt/{encoded_prompt}"

    return render_template("index.html", image=image_url)

if __name__ == "__main__":
    app.run(debug=True)
