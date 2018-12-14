import Storage from "../../scripts/helpers/extStorage";
import notification from "../components/notification";
import send2AllBrainlyTabs from "../helpers/send2AllBrainlyTabs";

const DEFAULT_COLOR = "#57b2f8";

class ThemeColorChanger {
	constructor(color = DEFAULT_COLOR) {
		this.color = color;

		return this.Render();
	}
	Render() {
		this.$layout = $(`
		<div id="themeColor" class="column is-narrow">
			<article class="message is-info">
				<div class="message-header">
					<p>${System.data.locale.popup.extensionOptions.themeColor.title}</p>
				</div>
				<div class="message-body">
					<div class="field is-horizontal">
						<div class="field-label has-text-centered">
							<label class="label">${System.data.locale.popup.extensionOptions.themeColor.setYourColor}</label>
						</div>
						<div class="field-body">
							<div class="field">
								<div class="control">
									<label class="checkbox">
										<input id="rainbow" type="checkbox"> 🌈 ${System.data.locale.popup.extensionOptions.themeColor.rainbow}
									</label>
								</div>
							</div>
							<div class="field is-expanded">
								<div class="field has-addons">
									<datalist id="flatColors">
										<option value="#1abc9c">Turquoise</option><option value="#2ecc71">Emerland</option><option value="#3498db">Peterriver</option><option value="#9b59b6">Amethyst</option><option value="#34495e">Wetasphalt</option><option value="#16a085">Greensea</option><option value="#27ae60">Nephritis</option><option value="#2980b9">Belizehole</option><option value="#8e44ad">Wisteria</option><option value="#2c3e50">Midnightblue</option><option value="#f1c40f">Sunflower</option><option value="#e67e22">Carrot</option><option value="#e74c3c">Alizarin</option><option value="#ecf0f1">Clouds</option><option value="#95a5a6">Concrete</option><option value="#f39c12">Orange</option><option value="#d35400">Pumpkin</option><option value="#c0392b">Pomegranate</option><option value="#bdc3c7">Silver</option><option value="#7f8c8d">Asbestos</option>
									</datalist>
									<p class="control is-expanded">
										<input id="colorPicker" list="flatColors" class="input" type="color" placeholder="Text input" value="${this.color}">
									</p>
									<p class="control">
										<input id="colorValue" list="flatColors" class="input" type="text" placeholder="${System.data.locale.popup.extensionOptions.themeColor.pickAColor}"
										${this.color && ' value="' + this.color + '"'}>
									</p>
								</div>
								<p class="help">${System.data.locale.popup.extensionOptions.themeColor.colorFormatInfo}</p>
							</div>
						</div>
					</div>
					<div class="field is-horizontal">
						<div class="field-label"></div>
						<div class="field-body">
							<div class="field is-grouped is-grouped-right">
								<div class="control">
									<button class="button is-primary save">${System.data.locale.common.save}</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>`);

		this.$rainbow = $("#rainbow", this.$layout);
		this.$colorValue = $("#colorValue", this.$layout);
		this.$saveButton = $("button.save", this.$layout);
		this.$colorPicker = $("#colorPicker", this.$layout);

		this.BindEvents();

		return this.$layout;
	}
	BindEvents() {
		this.$colorPicker.on("change input", event => this.ColorInputHandler(event.target.value));
		this.$colorValue.on("input change", event => this.ColorInputHandler(event.target.value));
		this.$saveButton.click(this.SaveToStorage.bind(this));

		this.$rainbow.on("change", function() {
			let colors = "#ff796b, #ecb444, #fec83c, #53cf92, #57b2f8, #7a8adb, #ffb3ae";

			if (!this.checked) {
				colors = DEFAULT_COLOR;
			}

			this.$colorValue.val(colors).change();
		})
	}
	ColorInputHandler(color) {
		this.$colorValue.val(color);

		if (color.indexOf(",") == 0) {
			this.$colorPicker.val(color);
		}

		this.ChangeColor(color);
	}
	ChangeColor(color) {
		send2AllBrainlyTabs("changeColor", color);
	}
	SaveToStorage() {
		notification("Color saved");
		Storage.set({ themeColor: this.$colorValue.val() });
	}
}

export default ThemeColorChanger