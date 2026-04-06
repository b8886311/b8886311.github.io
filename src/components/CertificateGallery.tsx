import GallerySection from "./GallerySection.tsx";
import portfolioCertificates from "../data/Certificate.ts";
import type { PortfolioCertificate } from "../data/Certificate.ts";

function CertificateGallery() {
  return (
    <GallerySection
      sectionId="certificates"
      eyebrow="Certificates"
      title="Certifications"
      countLabel={`${portfolioCertificates.length} items`}
      itemLabel="Certificate"
      buttonLabel="View Certificate"
      items={portfolioCertificates as PortfolioCertificate[]}
    />
  );
}

export default CertificateGallery;
