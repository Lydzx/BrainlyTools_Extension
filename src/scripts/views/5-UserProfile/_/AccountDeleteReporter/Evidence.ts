import CreateElement from "@components/CreateElement";
import Build from "@root/helpers/Build";
import IsVisible from "@root/helpers/IsVisible";
import { Button, Flex, Icon, Text } from "@style-guide";
import { FlexElementType } from "@style-guide/Flex";
import { TextElement } from "@style-guide/Text";
import prettysize from "prettysize";
import type AccountDeleteReporterClassType from ".";

const REVIEWABLE_ICON_NAMES = ["video", "audio", "image"];
const ICON_NAMES = ["file", "pdf", ...REVIEWABLE_ICON_NAMES];

export default class Evidence {
  main: AccountDeleteReporterClassType;
  file: File;
  id: string;
  source: string;
  fileType: string;
  previewContainer: FlexElementType;
  previewElement: HTMLVideoElement | HTMLImageElement;
  iconSvg: string;
  iconImg: HTMLImageElement;
  container: FlexElementType;
  removeButton: Button;
  fileLink: TextElement<"div">;
  thumbnailContainer: FlexElementType;
  iconLink: TextElement<"div">;

  constructor(main: AccountDeleteReporterClassType, file: File) {
    this.main = main;
    this.file = file;
    this.id = `${Date.now()}_${System.randomNumber(0, 9999)}`;
    this.source = "";

    this.fileType = file.type.split("/").shift();

    this.RenderPreviewContainer();
    this.RenderFileIcon();
    this.Render();
    this.ReadFile();
    this.BindListener();
  }

  RenderPreviewContainer() {
    /**
     * @type {import("@components/CreateElement")
     * .CreateElementPropertiesType}
     */
    let data;

    if (this.fileType === "image") {
      data = {
        tag: "img",
        className: "sg-avatar__image",
      };
    } else if (this.fileType === "video" || this.fileType === "audio") {
      data = {
        tag: "video",
        muted: true,
        controls: true,
        className: "sg-avatar__image",
        title:
          System.data.locale.popup.extensionManagement.accountDeleteReports
            .playOrPause,
      };

      if (this.fileType === "audio") data.poster = this.iconSvg;
    }

    if (!data) return;

    this.previewContainer = Flex({
      // @ts-expect-error
      children: this.previewElement = CreateElement(data),
    });
  }

  RenderFileIcon() {
    const iconName = ICON_NAMES.includes(this.fileType)
      ? this.fileType
      : "file";

    this.iconSvg = `${System.data.meta.extension.URL}/images/fileIcons/${iconName}.svg`;

    this.iconImg = CreateElement({
      tag: "img",
      src: this.iconSvg,
      className: "sg-avatar__image",
    });
  }

  Render() {
    this.container = Build(
      Flex({
        noShrink: true,
        fullWidth: true,
        marginBottom: "s",
        direction: "column",
      }),
      [
        [
          Flex({ fullWidth: true }),
          [
            [
              Flex({ alignItems: "center" }),
              (this.removeButton = new Button({
                iconOnly: true,
                type: "solid-peach",
                icon: new Icon({ type: "close" }),
                size: "xs",
              })),
            ],
            [
              Flex({
                grow: true,
                direction: "column",
                marginLeft: "xs",
                marginRight: "xs",
                style: {
                  minWidth: "0",
                },
              }),
              [
                (this.fileLink = Text({
                  tag: "div",
                  href: "",
                  color: "gray",
                  size: "small",
                  weight: "bold",
                  align: "CENTER",
                  title: this.file.name,
                  className: "ext-evidence-name",
                  text: this.file.name.replace(/\s{2,}/g, " ").trim(),
                })),
                [
                  Flex({ justifyContent: "flex-end" }),
                  Text({
                    tag: "i",
                    size: "xsmall",
                    color: "gray-secondary",
                    text: prettysize(this.file.size),
                  }),
                ],
              ],
            ],
            [
              (this.thumbnailContainer = Flex({ alignItems: "center" })),
              [
                [
                  new Icon({
                    size: 32,
                    children: null,
                  }),
                  [
                    [
                      (this.iconLink = Text({
                        tag: "div",
                        href: "",
                      })),
                      this.iconImg,
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    );
  }

  ReadFile() {
    const reader = new FileReader();

    // reader.onprogress = this.ReaderOnProgress.bind(this);
    reader.onload = event => this.FileLoaded(event.target.result);

    reader.readAsDataURL(this.file);
  }

  BindListener() {
    this.removeButton.element.addEventListener("click", this.Remove.bind(this));

    if (REVIEWABLE_ICON_NAMES.includes(this.fileType)) {
      this.iconLink.addEventListener("click", this.TogglePreview.bind(this));
      this.fileLink.addEventListener("click", this.TogglePreview.bind(this));
    }
  }

  FileLoaded(source) {
    if (source instanceof ArrayBuffer) return;

    this.source = source;

    if (IsVisible(this.thumbnailContainer)) this.ShowThumbnail();
    else this.ShowPreview();
  }

  Remove() {
    const index = this.main.evidences.indexOf(this);

    this.main.evidences.splice(index, 1);
    this.container.remove();
  }

  TogglePreview() {
    if (IsVisible(this.thumbnailContainer)) {
      this.ShowPreview();
      this.HideThumbnail();

      return;
    }

    this.ShowThumbnail();
    this.HidePreview();
  }

  ShowPreview() {
    this.container.append(this.previewContainer);

    this.previewElement.src = this.source;

    if (this.previewElement instanceof HTMLVideoElement)
      this.previewElement.play();
  }

  HidePreview() {
    if (this.previewElement instanceof HTMLVideoElement)
      this.previewElement.pause();

    this.previewElement.src = "";

    this.main.HideElement(this.previewContainer);
  }

  ShowThumbnail() {
    if (this.fileType === "image") this.iconImg.src = this.source;
    else this.iconImg.src = this.iconSvg;

    this.container.firstElementChild.append(this.thumbnailContainer);
  }

  HideThumbnail() {
    this.main.HideElement(this.thumbnailContainer);

    this.iconImg.src = "";
  }
}
