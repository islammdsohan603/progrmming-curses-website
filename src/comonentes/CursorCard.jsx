import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Layers,
  Star,
  Tag,
  Users,
} from "lucide-react";

const CursorCard = ({ cursoeItem }) => {
  const {
    title,
    image,
    level,
    rating,
    _id,
    category,
    duration,
    price,
    students,
    features = [],
  } = cursoeItem;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          width={640}
          height={480}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-black text-blue-700 shadow-sm backdrop-blur">
          {level}
        </div>
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-lg bg-slate-950/80 px-3 py-1 text-xs font-black text-white backdrop-blur">
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          {rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1">
            <Layers className="size-3.5 text-emerald-600" />
            {category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1">
            <Clock3 className="size-3.5 text-blue-600" />
            {duration}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-black leading-snug text-slate-950">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5 font-semibold">
            <Users className="size-4 text-emerald-600" />
            {students}+ students
          </span>
          <span className="inline-flex items-center justify-end gap-1.5 font-black text-slate-950">
            <Tag className="size-4 text-blue-600" />${price}
          </span>
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={`/details/${_id}`}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            View Details
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CursorCard;
