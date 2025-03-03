import React from 'react';

function ImagePage() {
  const images = [
    {
      id: 1,
      title: "Nebula Exploration",
      date: "2970.143",
      url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      description: "Discovered new formation in the Carina nebula sector."
    },
    {
      id: 2,
      title: "Deep Space Anomaly",
      date: "2970.147",
      url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
      description: "Unusual energy signatures detected in quadrant 7."
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold tracking-wider mb-8">VISUAL LOGS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image) => (
          <div key={image.id} className="border border-cyan-900/50 rounded-lg overflow-hidden backdrop-blur-sm">
            <img src={image.url} alt={image.title} className="w-full h-64 object-cover" />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold">{image.title}</h2>
                <span className="text-sm text-cyan-600">{image.date}</span>
              </div>
              <p className="text-cyan-300/80">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagePage;