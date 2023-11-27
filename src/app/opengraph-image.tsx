import ImageComp from "next/image";
import { ImageResponse } from "next/og";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font

  return null;

  // return new ImageResponse(
  //   (
  //     // ImageResponse JSX element
  //     <div
  //       style={{
  //         fontSize: 128,
  //         background: "#887106",
  //         width: "100%",
  //         height: "100%",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <img
  //         src="https://2auoj8h2wx49tusm.public.blob.vercel-storage.com/Estoques-NAbfqQ9MhabS8EKYGhprfmvNaxBUaS.svg"
  //         alt="Italian Trulli"
  //         style={{
  //           width: 500,
  //           height: 500,
  //         }}
  //       ></img>
  //     </div>
  //   ),
  //   // ImageResponse options
  //   {
  //     // For convenience, we can re-use the exported opengraph-image
  //     // size config to also set the ImageResponse's width and height.
  //     ...size,
  //   }
  // );
}
