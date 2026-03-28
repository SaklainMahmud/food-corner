export default function Reservation() {
  return (
    <>
      <section className="section" style={{paddingTop: 'var(--sp-24)', backgroundColor: 'var(--surface)'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <div className="section-header section-header--center mb-12 fade-up">
            <span className="section-eyebrow">Secure Your Table</span>
            <h1 className="headline-xl">Reservations</h1>
            <p className="body-md text-muted mt-4">We accept reservations up to 30 days in advance. For parties larger than 6, please call us directly.</p>
          </div>
          
          <div className="card fade-up" data-delay="1" style={{padding: 'var(--sp-12)'}}>
            <form onSubmit={(e) => { e.preventDefault(); alert("Reservation request submitted (Demo)"); }}>
              <div className="grid-2 mb-6">
                <div>
                  <label className="label-sm font-bold mb-2">Date</label>
                  <input type="date" required className="w-full" style={{padding: 'var(--sp-3)', border: '1px solid var(--border)', backgroundColor: 'transparent'}} />
                </div>
                <div>
                  <label className="label-sm font-bold mb-2">Time</label>
                  <select required className="w-full" style={{padding: 'var(--sp-3)', border: '1px solid var(--border)', backgroundColor: 'transparent'}}>
                    <option value="">Select Time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="label-sm font-bold mb-2">Party Size</label>
                <input type="number" min="1" max="6" required defaultValue="2" className="w-full" style={{padding: 'var(--sp-3)', border: '1px solid var(--border)', backgroundColor: 'transparent'}} />
              </div>

              <div className="border-t pt-6 mb-6">
                <h3 className="headline-sm mb-4">Contact Details</h3>
                <div className="grid-2 mb-4">
                  <input type="text" placeholder="First Name" required className="w-full" style={{padding: 'var(--sp-3)', border: '1px solid var(--border)', backgroundColor: 'transparent'}} />
                  <input type="text" placeholder="Last Name" required className="w-full" style={{padding: 'var(--sp-3)', border: '1px solid var(--border)', backgroundColor: 'transparent'}} />
                </div>
                <input type="email" placeholder="Email Address" required className="w-full mb-4" style={{padding: 'var(--sp-3)', border: '1px solid var(--border)', backgroundColor: 'transparent'}} />
                <input type="tel" placeholder="Phone Number" required className="w-full" style={{padding: 'var(--sp-3)', border: '1px solid var(--border)', backgroundColor: 'transparent'}} />
              </div>

              <button type="submit" className="btn btn-primary w-full" style={{justifyContent: 'center'}}>Confirm Reservation</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
