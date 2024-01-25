import Link from 'next/link';
import {motion, useMotionTemplate, useMotionValue} from 'framer-motion';

import {GridPattern} from '@/components/GridPattern';
import {EnvelopeIcon} from '@/components/icons/EnvelopeIcon';
import {UserIcon} from '@/components/icons/UserIcon';
import {UsersIcon} from '@/components/icons/UsersIcon';
import { Tag } from './Tag';

function ExamplePattern({mouseX, mouseY, ...gridProps}) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = {maskImage, WebkitMaskImage: maskImage};

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-md transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-md bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

export default function Example({example}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({currentTarget, clientX, clientY}) {
    const {left, top} = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      key={example.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-md bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ExamplePattern {...example.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-md px-4 pb-4 pt-16">
        <h3 className="mt-4 text-lg font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={example.href}>
            <span className="absolute inset-0 rounded-md" />
            {example.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {example.description}
        </p>
        <ul className='flex space-x-2 mt-3'>
          {example.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </ul>
      </div>
    </div>
  );
}