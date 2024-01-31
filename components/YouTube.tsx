// Create React Componenent that renders responsive YouTube video
export default function YouTube({ youtubeId }) {
  return (
    <div className="youtube-container">
      <iframe
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    </div>
  )
}
