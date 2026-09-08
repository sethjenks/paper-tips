import { blockChipHref, type ResolvedStackBlock } from "../lib/stacks";

interface StackChipsProps {
  blocks: ResolvedStackBlock[];
}

export function StackChips({ blocks }: StackChipsProps) {
  return (
    <ul className="stack-chips">
      {blocks.map((entry) => {
        const href = blockChipHref(entry.block);
        const className = entry.optional ? "stack-chip stack-chip-optional" : "stack-chip";

        return (
          <li key={`${entry.ref}-${entry.optional ? "optional" : "required"}`}>
            {href ? (
              <a className={className} href={href} rel="noopener noreferrer">
                {entry.block.name}
              </a>
            ) : (
              <span className={className}>{entry.block.name}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
