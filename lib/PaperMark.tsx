import { brand } from "./brand";

export function PaperMark({
  size,
  fill = brand.mark,
}: {
  size: number;
  fill?: string;
}) {
  const unit = size / 21;
  const block = (left: number, top: number, width: number, height: number) => (
    <div
      style={{
        position: "absolute",
        left: left * unit,
        top: top * unit,
        width: width * unit,
        height: height * unit,
        background: fill,
      }}
    />
  );

  return (
    <div style={{ width: size, height: size, display: "flex", position: "relative" }}>
      {block(3, 0, 18, 3)}
      {block(13, 3, 8, 10)}
      {block(0, 3, 3, 18)}
      {block(3, 13, 10, 8)}
    </div>
  );
}
