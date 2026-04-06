import { type Types, useLanyard } from "use-lanyard";

const DISCORD_USERID = import.meta.env.PUBLIC_DISCORD_USER_ID as `${bigint}`;

const rowClass =
  "flex h-12 max-w-sm items-center gap-3 rounded-md border border-zinc-800/90 bg-zinc-900/35 px-2.5 py-1.5";

function SpotifyLogoLink() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 text-zinc-500 transition-colors hover:text-zinc-300"
      href="https://open.spotify.com/user/reaker911x"
      aria-label="Spotify profile"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 64 64"
        aria-hidden={true}
      >
        <path
          fill="currentColor"
          d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z"
        />
      </svg>
    </a>
  );
}

function LoadingSpotifyTrack() {
  return (
    <div className={rowClass}>
      <div className="size-9 shrink-0 animate-pulse rounded bg-zinc-800/80" />
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="h-2.5 w-3/4 animate-pulse rounded bg-zinc-800/80" />
        <div className="h-2 w-1/2 animate-pulse rounded bg-zinc-800/60" />
      </div>
      <SpotifyLogoLink />
    </div>
  );
}

function SpotifyTrack({ spotify }: { spotify: Types.Spotify | undefined }) {
  return (
    <div className={rowClass}>
      <div className="size-9 shrink-0 overflow-hidden rounded bg-zinc-800">
        {spotify?.album_art_url ? (
          <img
            src={spotify.album_art_url}
            alt=""
            width={36}
            height={36}
            className="size-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden={true}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m4.9 4.9 14.2 14.2" />
            </svg>
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1 text-left text-zinc-200">
        <a
          href={`https://open.spotify.com/track/${spotify?.track_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block truncate text-xs font-medium hover:text-white"
          title={spotify?.song}
        >
          {spotify?.song}
        </a>
        <p className="truncate text-[11px] text-zinc-500" title={spotify?.artist ?? ""}>
          {spotify?.artist ?? ""}
        </p>
      </div>
      <SpotifyLogoLink />
    </div>
  );
}

function NoTrackPlaying() {
  return (
    <div className={rowClass}>
      <div className="flex min-w-0 flex-1 items-center">
        <p className="truncate text-xs text-zinc-500">Not playing anything right now</p>
      </div>
      <SpotifyLogoLink />
    </div>
  );
}

export default function SpotifyCurrentlyPlaying() {
  const { data, state } = useLanyard(DISCORD_USERID);
  const spotify = data?.spotify ?? undefined;

  return (
    <section className="mx-auto w-full max-w-sm pt-2" aria-label="Spotify status">
      {state !== "loaded" ? (
        <LoadingSpotifyTrack />
      ) : data?.listening_to_spotify ? (
        <SpotifyTrack spotify={spotify} />
      ) : (
        <NoTrackPlaying />
      )}
    </section>
  );
}
