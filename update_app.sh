sed -i '/<link rel="canonical" href="https:\/\/vamela.info\/" \/>/a\
        <script type="application/ld+json">\n\
          {`\n\
            {\n\
              "@context": "https://schema.org",\n\
              "@type": "LocalBusiness",\n\
              "name": "Vamela Webdesign",\n\
              "image": "https://i.postimg.cc/Lm8nq1Sf/Logo-weiss.png",\n\
              "description": "Professionelles Webdesign und KI-optimierte Websites für Selbstständige und kleine Unternehmen in Freising, München und deutschlandweit.",\n\
              "address": {\n\
                "@type": "PostalAddress",\n\
                "streetAddress": "In der Leiten 10",\n\
                "addressLocality": "Haag an der Amper",\n\
                "postalCode": "85410",\n\
                "addressCountry": "DE"\n\
              },\n\
              "geo": {\n\
                "@type": "GeoCoordinates",\n\
                "latitude": 48.4578,\n\
                "longitude": 11.8262\n\
              },\n\
              "url": "https://vamela.info",\n\
              "telephone": "+4917624200179",\n\
              "priceRange": "€€"\n\
            }\n\
          `}\n\
        </script>' src/App.tsx
