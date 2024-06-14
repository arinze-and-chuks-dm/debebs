/**
 * * Simple preview component for the keystatic editor
 */

// style import
import "@/styles/keystatic.css";

interface Props {
  image: {
    data: Uint8Array;
    extension: string;
    filename: string;
  } | null;
  description: string;
  linkText: string;
  linkUrl: string | null;
}

const KeystaticAdmonition = ({
  image,
  description,
  linkText,
  linkUrl = "",
}: Props) => {
  return (
    <div className="ks-affiliate">
      {/* <img src={image.filename} className="ks-affiliate__image" />
      <a href={linkUrl} className="ks-link__text">
        {linkText}
      </a> */}
      <p>
        <strong>description:</strong> {description}
      </p>
      <p>
        <strong>button text:</strong> {linkText}
      </p>
      <p>
        <strong>link:</strong> {linkUrl}
      </p>
    </div>
  );
};

export default KeystaticAdmonition;
