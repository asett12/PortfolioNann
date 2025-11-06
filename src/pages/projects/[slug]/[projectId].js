import { useRouter } from "next/router";
import SkeletonImage from "@/components/SkeletonImage";
import Link from "next/link";
import { getProjectFromCategory } from "@/data/portfolioData";

export default function ProjectGalleryPage() {
  const router = useRouter();
  const { slug, projectId } = router.query;

  if (!slug || !projectId) return null;

  const project = getProjectFromCategory(slug, projectId);
  const gallery = project?.gallery || [];

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#1c1c1d] dark:text-slate-100">
      <div className="pl-40 pt-[30px]">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 mb-6 text-dark dark:text-light 
                      hover:text-lightGreen dark:hover:text-primaryDark hover:underline
                      transition-all duration-200"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

        {/* Header */}
        <div className="py-6 text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-3">
            {slug} / {projectId}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 dark:text-slate-50 mb-3">
            {project?.headline || project?.title || "Project Gallery"}
          </h1>
          <p className="text-slate-400 dark:text-slate-400/90 max-w-2xl mx-auto text-sm leading-relaxed">
            {project?.overview ||
              "A collection of photos and assets from this project."}
          </p>
        </div>


      {/* Gallery */}
      <div className="mx-auto max-w-6xl px-4 md:px-4 pb-16">
        {gallery.length === 0 ? (
          <p className="text-center text-slate-300 dark:text-slate-500 text-sm">
            (No gallery images found for this project.)
          </p>
        ) : (
          <div
            className="
              grid gap-6
              grid-cols-2
              lg:grid-cols-3
            "
          >
            {gallery.map((item, index) => (
              <GalleryCard key={index} src={item.src} caption={item.caption} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ArrowLeftIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function GalleryCard({ src, caption }) {
  const isVideo = src.endsWith(".mp4");

  const thumbnail = isVideo
    ? src.replace(".mp4", "-thumb.jpg")
    : src;

  return (
    <div
      className="
        relative overflow-hidden rounded-xl
        bg-slate-100 dark:bg-slate-800/40
        border border-slate-100/0 dark:border-slate-700/30
        shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/30
        transition-transform duration-500
        group
        hover:-translate-y-2
      "
    >
      <a href={src} target="_blank" rel="noopener noreferrer">
        <SkeletonImage
          src={thumbnail}
          alt={caption || "Gallery image"}
          width={600}
          height={400}
          className="
            object-cover w-full
            h-[260px] md:h-[300px] lg:h-[340px]
            transition-transform duration-500 group-hover:scale-105
          "
          containerClassName="w-full h-[260px] md:h-[300px] lg:h-[340px]"
        />

        {/* play icon overlay for videos */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-white opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </a>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4">
        <p className="text-white text-sm md:text-base font-medium drop-shadow">
          {caption || "Untitled photo"}
        </p>
      </div>
    </div>
  );
}


