import Image from 'next/image';
import { properties } from '@/app/lib/data';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

interface Property {
  id: string;
  title: string;
  location: string;
  type: 'sale' | 'rent';
  price: number;
  description: string;
  images: string[];
  features: string[];
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  agent: {
    name: string;
    email: string;
    phone: string;
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const property = properties.find((p: Property) => p.id === params.id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">{property.title}</h1>
          <div className="flex items-center gap-6 text-xl">
            <p className="text-gray-400">{property.location}</p>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                property.type === 'sale'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {property.type === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
            <span className="text-2xl font-bold">
              ${property.price.toLocaleString()}
              {property.type === 'rent' ? '/month' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {property.images.map((image: string, index: number) => (
              <div
                key={index}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About this property</h2>
              <p className="text-gray-600 mb-8">{property.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Stats & Contact */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-zinc-950">
                  Property Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms</span>
                    <span className="font-semibold text-zinc-950">
                      {property.bedrooms}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms</span>
                    <span className="font-semibold text-zinc-950">
                      {property.bathrooms}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area</span>
                    <span className="font-semibold text-zinc-950">
                      {property.area} sq ft
                    </span>
                  </div>
                </div>
              </div>

              {/* Agent Contact */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-zinc-950">
                  Contact Agent
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-zinc-950">
                      {property.agent.name}
                    </p>
                    <p className="text-gray-600">{property.agent.email}</p>
                    <p className="text-gray-600">{property.agent.phone}</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
