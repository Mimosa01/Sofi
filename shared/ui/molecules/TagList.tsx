type Props = {
  tags: string[];
}

export default function TagList ({ tags }: Props) {
  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {tags.map((item, index) => (
        <li key={index} className="px-2 py-1 text-sm text-neutral-800 leading-4.5 bg-neutral-100 rounded-md hover:bg-neutral-200 transition-all duration-300">
          { item }
        </li>
      ))}
    </ul>
  )
}