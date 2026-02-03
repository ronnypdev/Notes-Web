import { TagIcon } from '../icons';

export default function NavigationList() {
  return (
    <ul className="tags">
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
          Cooking
        </span>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
          Dev
        </span>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
          Fitness
        </span>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
          Health
        </span>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
          Personal
        </span>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <a href="#">
          <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
            React
          </span>
        </a>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <a href="#">
          <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
            Shopping
          </span>
        </a>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <a href="#">
          <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
            Travel
          </span>
        </a>
      </li>
      <li className="flex py-[0.625rem] px-[0.75rem] items-center gap-[0.5rem] self-stretch">
        <TagIcon className="w-5 h-5 text-neutral-700" />
        <a href="#">
          <span className="text-neutral-700 font-sans text-sm font-medium leading-[1.2] tracking-[-0.0125rem]">
            TypeScript
          </span>
        </a>
      </li>
    </ul>
  );
}
