export default function  UserDashboard() {
    return ( <>
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
        {/* Sidebar */}
        <aside style={{ width: 240, background: '#212b36', color: '#fff', padding: '2rem 1rem' }}>
            <h2 style={{ marginBottom: '2rem', fontWeight: 700, fontSize: 24 }}>Admin Panel</h2>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ margin: '1rem 0', fontWeight: 500, cursor: 'pointer' }}>Dashboard</li>
                    <li style={{ margin: '1rem 0', fontWeight: 500, cursor: 'pointer' }}>Users</li>
                    <li style={{ margin: '1rem 0', fontWeight: 500, cursor: 'pointer' }}>Analytics</li>
                    <li style={{ margin: '1rem 0', fontWeight: 500, cursor: 'pointer' }}>Settings</li>
                </ul>
            </nav>
        </aside>
        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem' }}>
            {/* Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: 28, fontWeight: 700 }}>Dashboard Overview</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: 4,
                            border: '1px solid #ccc',
                            outline: 'none',
                        }}
                    />
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Admin"
                        style={{ borderRadius: '50%', width: 40, height: 40 }}
                    />
                </div>
            </header>
            {/* Stats Cards */}
            <section style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ flex: 1, background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 2px 8px #0001' }}>
                    <h3 style={{ fontSize: 16, color: '#637381', marginBottom: 8 }}>Total Users</h3>
                    <div style={{ fontSize: 32, fontWeight: 700 }}>1,245</div>
                </div>
                <div style={{ flex: 1, background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 2px 8px #0001' }}>
                    <h3 style={{ fontSize: 16, color: '#637381', marginBottom: 8 }}>Active Sessions</h3>
                    <div style={{ fontSize: 32, fontWeight: 700 }}>312</div>
                </div>
                <div style={{ flex: 1, background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 2px 8px #0001' }}>
                    <h3 style={{ fontSize: 16, color: '#637381', marginBottom: 8 }}>Revenue</h3>
                    <div style={{ fontSize: 32, fontWeight: 700 }}>$9,870</div>
                </div>
            </section>
            {/* Recent Users Table */}
            <section style={{ background: '#fff', borderRadius: 8, padding: '1.5rem', boxShadow: '0 2px 8px #0001' }}>
                <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: '1rem' }}>Recent Users</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f4f6f8', textAlign: 'left' }}>
                            <th style={{ padding: '0.75rem' }}>Name</th>
                            <th style={{ padding: '0.75rem' }}>Email</th>
                            <th style={{ padding: '0.75rem' }}>Status</th>
                            <th style={{ padding: '0.75rem' }}>Joined</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '0.75rem' }}>Alice Smith</td>
                            <td style={{ padding: '0.75rem' }}>alice@example.com</td>
                            <td style={{ padding: '0.75rem' }}><span style={{ color: '#229a16', fontWeight: 500 }}>Active</span></td>
                            <td style={{ padding: '0.75rem' }}>2024-06-01</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '0.75rem' }}>Bob Johnson</td>
                            <td style={{ padding: '0.75rem' }}>bob@example.com</td>
                            <td style={{ padding: '0.75rem' }}><span style={{ color: '#b71d18', fontWeight: 500 }}>Inactive</span></td>
                            <td style={{ padding: '0.75rem' }}>2024-05-28</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '0.75rem' }}>Carol Lee</td>
                            <td style={{ padding: '0.75rem' }}>carol@example.com</td>
                            <td style={{ padding: '0.75rem' }}><span style={{ color: '#229a16', fontWeight: 500 }}>Active</span></td>
                            <td style={{ padding: '0.75rem' }}>2024-05-25</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    </div>
    </>
    )
}