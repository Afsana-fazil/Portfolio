export default function Footer() {
    return (
        <section className="lg:px-28 px-10 py-10 md:flex justify-between items-center gap-4">
            <div className="flex flex-col gap-2 mb-8 ">
                <h1 className="text-2xl font-bold">
                    <a href="#home" className="text-2xl text-white">Port
                        <span className="text-purple-500">folio.</span>
                    </a>
                </h1>
                <p className="md:tracking-wider tracking-wide">Building digital experiences with passion.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
                <p className="text-gray-300 hover:text-gray-400 text-center">
                © 2025 Afsana F S. All rights reserved.
                </p>
          </div>
        </section>
    )
  }
  



