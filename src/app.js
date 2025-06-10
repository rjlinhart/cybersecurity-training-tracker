class CyberSecTracker {
    constructor() {
        this.curriculum = this.initializeCurriculum();
        this.progress = this.loadProgress();
        this.achievements = this.initializeAchievements();
        this.init();
    }

    initializeCurriculum() {
        return [
            {
                title: "Phase 1: Foundations",
                weeks: [
                    {
                        title: "Week 1-2: Basic Programming & Command Line",
                        tasks: [                            {
                                id: "p1w1t1",
                                title: "Python Variables and Data Types",
                                description: "Complete Python basics tutorial and practice exercises",
                                type: "coding",
                                estimatedHours: 4,
                                content: {
                                    objectives: [
                                        "Understand Python data types (int, float, string, bool)",
                                        "Learn variable assignment and naming conventions",
                                        "Practice basic operations and string manipulation",
                                        "Create simple programs using variables"
                                    ],
                                    theory: `
                                        <h3>Python Fundamentals</h3>
                                        <p>Python is one of the most important languages in cybersecurity. Let's start with the basics:</p>
                                        
                                        <h4>1. Variables and Assignment</h4>
                                        <pre><code>
# Variable assignment
name = "CyberSec Student"
age = 17
is_learning = True
score = 95.5
                                        </code></pre>
                                        
                                        <h4>2. Data Types</h4>
                                        <ul>
                                            <li><strong>String:</strong> Text data in quotes</li>
                                            <li><strong>Integer:</strong> Whole numbers</li>
                                            <li><strong>Float:</strong> Decimal numbers</li>
                                            <li><strong>Boolean:</strong> True/False values</li>
                                        </ul>
                                        
                                        <h4>3. Basic Operations</h4>
                                        <pre><code>
# String operations
greeting = "Hello " + "World"
repeated = "Hack" * 3  # "HackHackHack"

# Numeric operations
total = 10 + 5
power = 2 ** 8  # 256
                                        </code></pre>
                                    `,
                                    lab: {
                                        title: "Interactive Python Variables Lab",
                                        instructions: [
                                            "Open Python interpreter or create a new .py file",
                                            "Complete each exercise below",
                                            "Test your code and verify the output"
                                        ],
                                        exercises: [
                                            {
                                                title: "Exercise 1: Personal Info",
                                                task: "Create variables for your name, age, favorite cybersecurity tool, and whether you're interested in pentesting",
                                                solution: `
name = "Your Name"
age = 17
favorite_tool = "Nmap"
interested_in_pentesting = True

print(f"Hi, I'm {name}, age {age}")
print(f"My favorite security tool is {favorite_tool}")
print(f"Interested in pentesting: {interested_in_pentesting}")
                                                `
                                            },
                                            {
                                                title: "Exercise 2: Security Calculator",
                                                task: "Calculate password strength: Create variables for password length, has_numbers, has_symbols, and calculate a basic strength score",
                                                solution: `
password_length = 12
has_numbers = True
has_symbols = True
has_uppercase = True

strength = password_length
if has_numbers:
    strength += 2
if has_symbols:
    strength += 3
if has_uppercase:
    strength += 1

print(f"Password strength score: {strength}")
if strength >= 15:
    print("Strong password!")
else:
    print("Consider making it stronger")
                                                `
                                            }
                                        ]
                                    },
                                    resources: [
                                        {
                                            title: "Python.org Official Tutorial",
                                            url: "https://docs.python.org/3/tutorial/",
                                            type: "documentation"
                                        },
                                        {
                                            title: "Python for Cybersecurity",
                                            url: "https://www.cybrary.it/course/python/",
                                            type: "video"
                                        }
                                    ]
                                }
                            },                            {
                                id: "p1w1t2",
                                title: "Linux Command Line Basics",
                                description: "Master file system navigation and basic commands",
                                type: "lab",
                                estimatedHours: 3,
                                content: {
                                    objectives: [
                                        "Navigate the Linux file system efficiently",
                                        "Understand file permissions and ownership",
                                        "Use essential command-line tools",
                                        "Practice terminal-based file operations"
                                    ],
                                    theory: `
                                        <h3>Linux Command Line Mastery</h3>
                                        <p>The command line is a pentester's best friend. Master these fundamentals:</p>
                                        
                                        <h4>Essential Navigation Commands</h4>
                                        <pre><code>
pwd                 # Print working directory
ls -la              # List files with details
cd /path/to/dir     # Change directory
cd ..               # Go up one directory
cd ~                # Go to home directory
                                        </code></pre>
                                        
                                        <h4>File Operations</h4>
                                        <pre><code>
touch file.txt      # Create empty file
mkdir dirname       # Create directory
cp file1 file2      # Copy file
mv file1 file2      # Move/rename file
rm file.txt         # Delete file
rm -rf dirname      # Delete directory recursively
                                        </code></pre>
                                        
                                        <h4>File Permissions</h4>
                                        <pre><code>
chmod 755 script.sh # Make executable
chmod +x script.sh  # Add execute permission
chown user:group file # Change ownership
ls -l               # View permissions
                                        </code></pre>
                                    `,
                                    lab: {
                                        title: "Linux Command Line Lab",
                                        setup: "Use a Linux VM, WSL, or online Linux terminal",
                                        instructions: [
                                            "Open a terminal",
                                            "Complete each exercise in order",
                                            "Take screenshots of successful commands"
                                        ],
                                        exercises: [
                                            {
                                                title: "Exercise 1: File System Exploration",
                                                tasks: [
                                                    "Navigate to your home directory",
                                                    "List all files including hidden ones",
                                                    "Create a directory called 'cybersec_lab'",
                                                    "Navigate into this directory",
                                                    "Create 3 empty files: passwords.txt, logs.txt, config.txt"
                                                ],
                                                commands: [
                                                    "cd ~",
                                                    "ls -la",
                                                    "mkdir cybersec_lab",
                                                    "cd cybersec_lab",
                                                    "touch passwords.txt logs.txt config.txt"
                                                ]
                                            },
                                            {
                                                title: "Exercise 2: Security-Focused File Operations",
                                                tasks: [
                                                    "Create a script file called 'security_check.sh'",
                                                    "Make it executable for the owner only",
                                                    "Create a backup of passwords.txt",
                                                    "View the permissions of all files",
                                                    "Change ownership of logs.txt (if you have sudo)"
                                                ],
                                                commands: [
                                                    "touch security_check.sh",
                                                    "chmod 700 security_check.sh",
                                                    "cp passwords.txt passwords_backup.txt",
                                                    "ls -l",
                                                    "sudo chown root:root logs.txt  # if available"
                                                ]
                                            },
                                            {
                                                title: "Exercise 3: Log Analysis Preparation",
                                                tasks: [
                                                    "Add some sample log entries to logs.txt using echo",
                                                    "Use grep to search for specific patterns",
                                                    "Count lines in the file",
                                                    "Display the first and last few lines"
                                                ],
                                                commands: [
                                                    'echo "2025-06-10 10:15:32 LOGIN user1" >> logs.txt',
                                                    'echo "2025-06-10 10:16:45 FAILED_LOGIN user2" >> logs.txt',
                                                    'echo "2025-06-10 10:17:12 LOGOUT user1" >> logs.txt',
                                                    "grep FAILED logs.txt",
                                                    "wc -l logs.txt",
                                                    "head -2 logs.txt",
                                                    "tail -1 logs.txt"
                                                ]
                                            }
                                        ]
                                    },
                                    resources: [
                                        {
                                            title: "Linux Command Line Cheat Sheet",
                                            url: "https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/",
                                            type: "reference"
                                        },
                                        {
                                            title: "OverTheWire Bandit",
                                            url: "https://overthewire.org/wargames/bandit/",
                                            type: "interactive"
                                        }
                                    ]
                                }
                            },
                            {
                                id: "p1w1t3",
                                title: "Python Functions and Loops",
                                description: "Build 5 small Python programs using functions and loops",
                                type: "coding",
                                estimatedHours: 5
                            },
                            {
                                id: "p1w1t4",
                                title: "File Permissions Lab",
                                description: "Practice Linux file permissions and user management",
                                type: "lab",
                                estimatedHours: 2
                            }
                        ]
                    },
                    {
                        title: "Week 3-4: Networking Basics",
                        tasks: [
                            {
                                id: "p1w2t1",
                                title: "TCP/IP Protocol Study",
                                description: "Learn networking fundamentals and protocol stack",
                                type: "theory",
                                estimatedHours: 3
                            },                            {
                                id: "p1w2t2",
                                title: "Wireshark Packet Analysis Lab",
                                description: "Capture and analyze network traffic with Wireshark",
                                type: "lab",
                                estimatedHours: 4,
                                content: {
                                    objectives: [
                                        "Install and configure Wireshark",
                                        "Capture live network traffic",
                                        "Analyze different protocols (HTTP, DNS, TCP)",
                                        "Identify suspicious network activity"
                                    ],
                                    theory: `
                                        <h3>Network Packet Analysis with Wireshark</h3>
                                        <p>Wireshark is the world's foremost network protocol analyzer. It's essential for cybersecurity professionals.</p>
                                        
                                        <h4>What is Packet Analysis?</h4>
                                        <p>Packet analysis involves capturing and examining network traffic to:</p>
                                        <ul>
                                            <li>Troubleshoot network issues</li>
                                            <li>Detect security threats</li>
                                            <li>Understand network protocols</li>
                                            <li>Monitor network performance</li>
                                        </ul>
                                        
                                        <h4>Key Wireshark Features</h4>
                                        <ul>
                                            <li><strong>Live Capture:</strong> Real-time packet capture</li>
                                            <li><strong>Protocol Decoding:</strong> Understands hundreds of protocols</li>
                                            <li><strong>Filtering:</strong> Display and capture filters</li>
                                            <li><strong>Statistics:</strong> Network usage analysis</li>
                                        </ul>
                                        
                                        <h4>Common Protocols to Analyze</h4>
                                        <pre><code>
HTTP/HTTPS  - Web traffic
DNS         - Domain name resolution
TCP         - Transmission Control Protocol
UDP         - User Datagram Protocol
ICMP        - Internet Control Message Protocol
ARP         - Address Resolution Protocol
                                        </code></pre>
                                    `,
                                    lab: {
                                        title: "Wireshark Network Analysis Lab",
                                        setup: "Download and install Wireshark from https://www.wireshark.org/",
                                        instructions: [
                                            "Install Wireshark on your system",
                                            "Complete each exercise",
                                            "Save capture files for analysis",
                                            "Document your findings"
                                        ],
                                        exercises: [
                                            {
                                                title: "Exercise 1: Basic Packet Capture",
                                                tasks: [
                                                    "Start Wireshark and select your network interface",
                                                    "Begin capturing packets",
                                                    "Open a web browser and visit a few websites",
                                                    "Stop the capture after 2-3 minutes",
                                                    "Examine the captured packets"
                                                ],
                                                questions: [
                                                    "How many packets were captured?",
                                                    "What protocols do you see in the Protocol column?",
                                                    "Can you identify HTTP requests to websites?",
                                                    "What is the source and destination of most traffic?"
                                                ]
                                            },
                                            {
                                                title: "Exercise 2: HTTP Traffic Analysis",
                                                tasks: [
                                                    "Apply filter: http",
                                                    "Look for HTTP GET and POST requests",
                                                    "Right-click an HTTP packet → Follow → HTTP Stream",
                                                    "Examine the request and response headers",
                                                    "Look for any credentials or sensitive data"
                                                ],
                                                filters: [
                                                    "http - Show only HTTP traffic",
                                                    "http.request.method == GET - Show only GET requests",
                                                    "http.response.code == 200 - Show successful responses"
                                                ],
                                                questions: [
                                                    "What user-agent strings do you see?",
                                                    "Are there any cookies being transmitted?",
                                                    "Can you see any form data submissions?"
                                                ]
                                            },
                                            {
                                                title: "Exercise 3: DNS Analysis",
                                                tasks: [
                                                    "Apply filter: dns",
                                                    "Identify DNS queries and responses",
                                                    "Look for domain names being resolved",
                                                    "Check for any unusual or suspicious domains",
                                                    "Examine DNS response times"
                                                ],
                                                filters: [
                                                    "dns - Show only DNS traffic",
                                                    "dns.flags.response == 0 - Show DNS queries",
                                                    "dns.flags.response == 1 - Show DNS responses"
                                                ],
                                                questions: [
                                                    "What domains are being queried most frequently?",
                                                    "Are there any failed DNS lookups?",
                                                    "What DNS servers are being used?"
                                                ]
                                            },
                                            {
                                                title: "Challenge: Suspicious Activity Detection",
                                                tasks: [
                                                    "Create a new capture while browsing normally",
                                                    "Try to identify patterns that could indicate:",
                                                    "- Large data transfers",
                                                    "- Unusual ports being used",
                                                    "- Repeated connection attempts",
                                                    "- Non-standard protocols"
                                                ],
                                                analysis: [
                                                    "Use Statistics → Protocol Hierarchy",
                                                    "Check Statistics → Conversations",
                                                    "Look for unusual port numbers",
                                                    "Examine packet sizes and timing"
                                                ]
                                            }
                                        ]
                                    },
                                    resources: [
                                        {
                                            title: "Wireshark Official Documentation",
                                            url: "https://www.wireshark.org/docs/",
                                            type: "documentation"
                                        },
                                        {
                                            title: "Sample Capture Files",
                                            url: "https://wiki.wireshark.org/SampleCaptures",
                                            type: "practice"
                                        },
                                        {
                                            title: "Wireshark Display Filters",
                                            url: "https://wiki.wireshark.org/DisplayFilters",
                                            type: "reference"
                                        }
                                    ]
                                }
                            },                            {
                                id: "p1w2t3",
                                title: "Nmap Network Scanning",
                                description: "Learn network discovery and port scanning techniques",
                                type: "lab",
                                estimatedHours: 3,
                                content: {
                                    objectives: [
                                        "Understand different types of network scans",
                                        "Learn Nmap command-line options and flags",
                                        "Practice host discovery techniques",
                                        "Identify open ports and running services",
                                        "Understand scan timing and stealth techniques"
                                    ],
                                    theory: `
                                        <h3>Network Scanning with Nmap</h3>
                                        <p>Nmap (Network Mapper) is the most popular network discovery and security auditing tool used by cybersecurity professionals worldwide.</p>
                                        
                                        <h4>Types of Scans</h4>
                                        <ul>
                                            <li><strong>TCP Connect Scan (-sT):</strong> Full TCP handshake</li>
                                            <li><strong>SYN Stealth Scan (-sS):</strong> Half-open scan, more stealthy</li>
                                            <li><strong>UDP Scan (-sU):</strong> Scans UDP ports</li>
                                            <li><strong>Ping Scan (-sn):</strong> Host discovery only</li>
                                        </ul>
                                        
                                        <h4>Common Port States</h4>
                                        <ul>
                                            <li><strong>Open:</strong> Service is listening on the port</li>
                                            <li><strong>Closed:</strong> Port is accessible but no service listening</li>
                                            <li><strong>Filtered:</strong> Firewall is blocking the port</li>
                                            <li><strong>Unfiltered:</strong> Port is accessible but state unknown</li>
                                        </ul>
                                        
                                        <h4>Basic Nmap Syntax</h4>
                                        <pre><code>
nmap [Scan Type] [Options] [Target]

Examples:
nmap -sS 192.168.1.1        # SYN scan single host
nmap -sn 192.168.1.0/24     # Ping scan entire subnet
nmap -p 80,443 google.com   # Scan specific ports
nmap -A target              # Aggressive scan (OS, services, scripts)
                                        </code></pre>
                                    `,
                                    lab: {
                                        title: "Hands-on Nmap Network Scanning Lab",
                                        setup: "Install Nmap from https://nmap.org or use Kali Linux. ONLY scan your own networks or lab environments!",
                                        instructions: [
                                            "Install Nmap on your system",
                                            "Set up a safe lab environment (your own network or VMs)",
                                            "Complete each exercise progressively",
                                            "Document all findings and scan results",
                                            "IMPORTANT: Only scan networks you own or have permission to test"
                                        ],
                                        exercises: [
                                            {
                                                title: "Exercise 1: Basic Host Discovery",
                                                tasks: [
                                                    "Find your local IP address and subnet",
                                                    "Perform a ping scan on your local network",
                                                    "Identify live hosts on the network",
                                                    "Compare results with different discovery methods"
                                                ],
                                                commands: [
                                                    "# Find your IP address",
                                                    "ip addr show  # Linux",
                                                    "ipconfig  # Windows",
                                                    "",
                                                    "# Basic ping scan (replace with your subnet)",
                                                    "nmap -sn 192.168.1.0/24",
                                                    "",
                                                    "# Alternative discovery methods",
                                                    "nmap -PS 192.168.1.0/24  # TCP SYN ping",
                                                    "nmap -PA 192.168.1.0/24  # TCP ACK ping"
                                                ],
                                                questions: [
                                                    "How many live hosts were discovered?",
                                                    "What IP addresses are active on your network?",
                                                    "Did different ping methods give different results?",
                                                    "Can you identify your router's IP address?"
                                                ]
                                            },
                                            {
                                                title: "Exercise 2: Port Scanning Basics",
                                                tasks: [
                                                    "Scan common ports on localhost (127.0.0.1)",
                                                    "Perform a comprehensive scan on a target",
                                                    "Compare TCP vs UDP scanning",
                                                    "Analyze scan timing and performance"
                                                ],
                                                commands: [
                                                    "# Scan localhost common ports",
                                                    "nmap 127.0.0.1",
                                                    "",
                                                    "# Scan specific port ranges",
                                                    "nmap -p 1-1000 127.0.0.1",
                                                    "nmap -p 22,80,443,3389 target",
                                                    "",
                                                    "# Different scan types",
                                                    "nmap -sS target  # SYN scan",
                                                    "nmap -sT target  # TCP connect scan",
                                                    "nmap -sU target  # UDP scan",
                                                    "",
                                                    "# Fast scan",
                                                    "nmap -F target"
                                                ],
                                                questions: [
                                                    "Which ports are open on localhost?",
                                                    "What services might be running on these ports?",
                                                    "How long did different scan types take?",
                                                    "What's the difference between SYN and TCP connect scans?"
                                                ]
                                            },
                                            {
                                                title: "Exercise 3: Service Detection & OS Fingerprinting",
                                                tasks: [
                                                    "Enable service version detection",
                                                    "Attempt OS fingerprinting",
                                                    "Use Nmap scripts for additional information",
                                                    "Analyze and interpret scan results"
                                                ],
                                                commands: [
                                                    "# Service version detection",
                                                    "nmap -sV target",
                                                    "",
                                                    "# OS fingerprinting",
                                                    "nmap -O target",
                                                    "",
                                                    "# Aggressive scan (combines many options)",
                                                    "nmap -A target",
                                                    "",
                                                    "# Script scanning",
                                                    "nmap --script default target",
                                                    "nmap --script vuln target",
                                                    "",
                                                    "# Save results to file",
                                                    "nmap -oN scan_results.txt target"
                                                ],
                                                questions: [
                                                    "What services and versions were detected?",
                                                    "What operating system is the target running?",
                                                    "Did any scripts reveal security issues?",
                                                    "How accurate was the OS detection?"
                                                ]
                                            },
                                            {
                                                title: "Challenge: Stealth and Evasion",
                                                tasks: [
                                                    "Practice timing options to avoid detection",
                                                    "Use decoy scanning techniques",
                                                    "Fragment packets to evade firewalls",
                                                    "Compare normal vs stealth scan results"
                                                ],
                                                commands: [
                                                    "# Timing templates (T0=paranoid, T5=insane)",
                                                    "nmap -T1 target  # Slow and stealthy",
                                                    "nmap -T4 target  # Fast but detectable",
                                                    "",
                                                    "# Decoy scanning",
                                                    "nmap -D RND:10 target",
                                                    "nmap -D 192.168.1.100,192.168.1.200,ME target",
                                                    "",
                                                    "# Fragmentation",
                                                    "nmap -f target",
                                                    "",
                                                    "# Spoof source port",
                                                    "nmap --source-port 53 target"
                                                ],
                                                analysis: [
                                                    "Monitor your firewall/IDS logs during scans",
                                                    "Compare detection rates of different techniques",
                                                    "Understand the trade-offs between speed and stealth",
                                                    "Practice responsible disclosure if vulnerabilities found"
                                                ]
                                            }
                                        ]
                                    },
                                    resources: [
                                        {
                                            title: "Nmap Official Documentation",
                                            url: "https://nmap.org/docs.html",
                                            type: "documentation"
                                        },
                                        {
                                            title: "Nmap Cheat Sheet",
                                            url: "https://www.stationx.net/nmap-cheat-sheet/",
                                            type: "reference"
                                        },
                                        {
                                            title: "Legal Guidelines for Network Scanning",
                                            url: "https://nmap.org/book/legal-issues.html",
                                            type: "legal"
                                        }
                                    ]
                                }
                            },
                            {
                                id: "p1w2t4",
                                title: "Network Python Scripts",
                                description: "Write Python scripts for network operations",
                                type: "coding",
                                estimatedHours: 4
                            }
                        ]
                    }
                ]
            },
            {
                title: "Phase 2: Security Fundamentals",
                weeks: [
                    {
                        title: "Week 5-6: Web Security",
                        tasks: [
                            {
                                id: "p2w1t1",
                                title: "HTML/CSS/JavaScript Basics",
                                description: "Learn web technologies fundamentals",
                                type: "coding",
                                estimatedHours: 6
                            },
                            {
                                id: "p2w1t2",
                                title: "OWASP Top 10 Study",
                                description: "Research and document common web vulnerabilities",
                                type: "theory",
                                estimatedHours: 4
                            },
                            {
                                id: "p2w1t3",
                                title: "Burp Suite Introduction",
                                description: "Set up and learn basic Burp Suite functionality",
                                type: "lab",
                                estimatedHours: 3
                            },
                            {
                                id: "p2w1t4",
                                title: "Web Vulnerability Scanner",
                                description: "Build a basic web vulnerability scanner in Python",
                                type: "coding",
                                estimatedHours: 5
                            }
                        ]
                    },
                    {
                        title: "Week 7-8: System Security",
                        tasks: [
                            {
                                id: "p2w2t1",
                                title: "Kali Linux Setup",
                                description: "Install and configure Kali Linux virtual machine",
                                type: "lab",
                                estimatedHours: 2
                            },
                            {
                                id: "p2w2t2",
                                title: "Cryptography Fundamentals",
                                description: "Learn encryption, hashing, and digital signatures",
                                type: "theory",
                                estimatedHours: 4
                            },
                            {
                                id: "p2w2t3",
                                title: "Python Cryptography Lab",
                                description: "Implement basic encryption/decryption in Python",
                                type: "coding",
                                estimatedHours: 4
                            },
                            {
                                id: "p2w2t4",
                                title: "System Hardening Lab",
                                description: "Practice Windows and Linux security hardening",
                                type: "lab",
                                estimatedHours: 3
                            }
                        ]
                    }
                ]
            },
            {
                title: "Phase 3: Penetration Testing",
                weeks: [
                    {
                        title: "Week 9-12: Web Application Testing",
                        tasks: [
                            {
                                id: "p3w1t1",
                                title: "SQL Injection Labs",
                                description: "Practice SQL injection on DVWA and WebGoat",
                                type: "lab",
                                estimatedHours: 6
                            },
                            {
                                id: "p3w1t2",
                                title: "XSS Attack Labs",
                                description: "Learn and practice Cross-Site Scripting attacks",
                                type: "lab",
                                estimatedHours: 5
                            },
                            {
                                id: "p3w1t3",
                                title: "Automated SQLi Tool",
                                description: "Build an automated SQL injection detection tool",
                                type: "coding",
                                estimatedHours: 8
                            },
                            {
                                id: "p3w1t4",
                                title: "Web App Pentest Report",
                                description: "Complete full web application penetration test",
                                type: "project",
                                estimatedHours: 10
                            }
                        ]
                    },
                    {
                        title: "Week 13-16: Network Penetration Testing",
                        tasks: [
                            {
                                id: "p3w2t1",
                                title: "Metasploit Framework",
                                description: "Learn Metasploit for exploitation and post-exploitation",
                                type: "lab",
                                estimatedHours: 8
                            },
                            {
                                id: "p3w2t2",
                                title: "Buffer Overflow Basics",
                                description: "Understand and practice basic buffer overflow attacks",
                                type: "lab",
                                estimatedHours: 6
                            },
                            {
                                id: "p3w2t3",
                                title: "Privilege Escalation",
                                description: "Practice Windows and Linux privilege escalation",
                                type: "lab",
                                estimatedHours: 5
                            },
                            {
                                id: "p3w2t4",
                                title: "Custom Exploit Development",
                                description: "Develop a custom exploit for a known vulnerability",
                                type: "coding",
                                estimatedHours: 12
                            }
                        ]
                    }
                ]
            },
            {
                title: "Phase 4: Advanced Topics",
                weeks: [
                    {
                        title: "Week 17-20: Specialized Areas",
                        tasks: [
                            {
                                id: "p4w1t1",
                                title: "Digital Forensics Lab",
                                description: "Learn basic digital forensics and evidence collection",
                                type: "lab",
                                estimatedHours: 6
                            },
                            {
                                id: "p4w1t2",
                                title: "Malware Analysis Basics",
                                description: "Static and dynamic malware analysis techniques",
                                type: "lab",
                                estimatedHours: 8
                            },
                            {
                                id: "p4w1t3",
                                title: "Social Engineering Awareness",
                                description: "Study social engineering techniques and defenses",
                                type: "theory",
                                estimatedHours: 3
                            },
                            {
                                id: "p4w1t4",
                                title: "Incident Response Plan",
                                description: "Create a comprehensive incident response plan",
                                type: "project",
                                estimatedHours: 5
                            }
                        ]
                    },
                    {
                        title: "Week 21-24: Capstone Projects",
                        tasks: [
                            {
                                id: "p4w2t1",
                                title: "CTF Competition Participation",
                                description: "Participate in online Capture The Flag competitions",
                                type: "competition",
                                estimatedHours: 15
                            },
                            {
                                id: "p4w2t2",
                                title: "Complete Penetration Test",
                                description: "Perform full penetration test with professional report",
                                type: "project",
                                estimatedHours: 20
                            },
                            {
                                id: "p4w2t3",
                                title: "Security Tool Development",
                                description: "Build a complete security tool or framework",
                                type: "coding",
                                estimatedHours: 25
                            },
                            {
                                id: "p4w2t4",
                                title: "Portfolio Presentation",
                                description: "Create and present cybersecurity portfolio",
                                type: "project",
                                estimatedHours: 8
                            }
                        ]
                    }
                ]
            }
        ];
    }

    initializeAchievements() {
        return [
            { id: 'first_task', title: 'First Steps', description: 'Complete your first task', icon: '🎯', unlocked: false },
            { id: 'week_complete', title: 'Week Warrior', description: 'Complete a full week', icon: '📅', unlocked: false },
            { id: 'coding_master', title: 'Code Ninja', description: 'Complete 10 coding tasks', icon: '💻', unlocked: false },
            { id: 'lab_expert', title: 'Lab Expert', description: 'Complete 15 lab exercises', icon: '🔬', unlocked: false },
            { id: 'phase_complete', title: 'Phase Champion', description: 'Complete an entire phase', icon: '🏆', unlocked: false },
            { id: 'streak_7', title: 'Consistent Learner', description: '7-day learning streak', icon: '🔥', unlocked: false },
            { id: 'all_complete', title: 'Cybersec Master', description: 'Complete entire curriculum', icon: '👑', unlocked: false }
        ];
    }

    init() {
        this.renderCurriculum();
        this.updateStats();
        this.updateAchievements();
        this.setupEventListeners();
        this.loadNotes();
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const phaseIndex = e.target.dataset.phase;
                this.switchPhase(phaseIndex);
            });
        });

        // Task completion
        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' && e.target.classList.contains('task-checkbox')) {
                this.toggleTask(e.target.dataset.taskId, e.target.checked);
            }
        });

        // Auto-save notes
        document.getElementById('quick-notes').addEventListener('input', () => {
            this.saveNotes();
        });
    }

    switchPhase(phaseIndex) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`[data-phase="${phaseIndex}"]`).classList.add('active');

        // Show/hide phase content
        document.querySelectorAll('.phase-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`phase-${phaseIndex}`).style.display = 'block';
    }    renderCurriculum() {
        this.curriculum.forEach((phase, phaseIndex) => {
            const phaseElement = document.getElementById(`phase-${phaseIndex}`);
            let phaseHTML = `<h2>${phase.title}</h2>`;

            phase.weeks.forEach((week, weekIndex) => {
                const weekProgress = this.calculateWeekProgress(phaseIndex, weekIndex);
                phaseHTML += `
                    <div class="week-section">
                        <div class="week-header">
                            <h3 class="week-title">${week.title}</h3>
                            <span class="week-progress">${weekProgress.completed}/${weekProgress.total} tasks (${weekProgress.percentage}%)</span>
                        </div>
                        <ul class="task-list">
                `;

                week.tasks.forEach(task => {
                    const isCompleted = this.progress.completedTasks.includes(task.id);
                    const taskClass = isCompleted ? 'task-item completed' : 'task-item';
                    const typeIcon = this.getTaskIcon(task.type);
                    const hasContent = task.content && Object.keys(task.content).length > 0;
                    
                    phaseHTML += `
                        <li class="${taskClass}">
                            <input type="checkbox" class="task-checkbox" data-task-id="${task.id}" ${isCompleted ? 'checked' : ''}>
                            <div class="task-content">
                                <div class="task-header">
                                    <div class="task-title">${typeIcon} ${task.title}</div>
                                    ${hasContent ? `<button class="task-expand-btn" data-task-id="${task.id}">
                                        <i class="fas fa-chevron-down"></i> View Content
                                    </button>` : ''}
                                </div>
                                <div class="task-description">${task.description}</div>
                                <div class="task-meta">
                                    <span>Type: ${task.type}</span>
                                    <span>Estimated: ${task.estimatedHours}h</span>
                                </div>
                                ${hasContent ? this.renderTaskContent(task) : ''}
                            </div>
                        </li>
                    `;
                });

                phaseHTML += `
                        </ul>
                    </div>
                `;
            });

            phaseElement.innerHTML = phaseHTML;
        });
        
        // Add event listeners for expand buttons
        this.setupContentEventListeners();
    }

    renderTaskContent(task) {
        if (!task.content) return '';
        
        const content = task.content;
        let contentHTML = `<div class="task-detailed-content" id="content-${task.id}" style="display: none;">`;
        
        // Objectives section
        if (content.objectives) {
            contentHTML += `
                <div class="content-section">
                    <h4><i class="fas fa-bullseye"></i> Learning Objectives</h4>
                    <ul class="objectives-list">
                        ${content.objectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        // Theory section
        if (content.theory) {
            contentHTML += `
                <div class="content-section">
                    <h4><i class="fas fa-book"></i> Theory & Background</h4>
                    <div class="theory-content">
                        ${content.theory}
                    </div>
                </div>
            `;
        }
        
        // Lab section
        if (content.lab) {
            contentHTML += this.renderLabContent(content.lab);
        }
        
        // Resources section
        if (content.resources) {
            contentHTML += `
                <div class="content-section">
                    <h4><i class="fas fa-external-link-alt"></i> Additional Resources</h4>
                    <div class="resources-list">
                        ${content.resources.map(resource => `
                            <div class="resource-item">
                                <a href="${resource.url}" target="_blank" rel="noopener">
                                    <i class="fas fa-link"></i> ${resource.title}
                                </a>
                                <span class="resource-type">(${resource.type})</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        contentHTML += '</div>';
        return contentHTML;
    }

    renderLabContent(lab) {
        let labHTML = `
            <div class="content-section lab-section">
                <h4><i class="fas fa-flask"></i> ${lab.title}</h4>
        `;
        
        if (lab.setup) {
            labHTML += `
                <div class="lab-setup">
                    <h5><i class="fas fa-cog"></i> Setup Requirements</h5>
                    <p>${lab.setup}</p>
                </div>
            `;
        }
        
        if (lab.instructions) {
            labHTML += `
                <div class="lab-instructions">
                    <h5><i class="fas fa-list-ol"></i> Instructions</h5>
                    <ol>
                        ${lab.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            `;
        }
        
        if (lab.exercises) {
            labHTML += `
                <div class="lab-exercises">
                    <h5><i class="fas fa-tasks"></i> Exercises</h5>
            `;
            
            lab.exercises.forEach((exercise, index) => {
                labHTML += `
                    <div class="exercise">
                        <h6>Exercise ${index + 1}: ${exercise.title}</h6>
                `;
                
                if (exercise.task) {
                    labHTML += `<p class="exercise-task"><strong>Task:</strong> ${exercise.task}</p>`;
                }
                
                if (exercise.tasks) {
                    labHTML += `
                        <div class="exercise-tasks">
                            <strong>Tasks to complete:</strong>
                            <ul>
                                ${exercise.tasks.map(task => `<li>${task}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                
                if (exercise.commands) {
                    labHTML += `
                        <div class="exercise-commands">
                            <strong>Commands to try:</strong>
                            <pre><code>${exercise.commands.join('\n')}</code></pre>
                        </div>
                    `;
                }
                
                if (exercise.questions) {
                    labHTML += `
                        <div class="exercise-questions">
                            <strong>Questions to answer:</strong>
                            <ul>
                                ${exercise.questions.map(q => `<li>${q}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                
                if (exercise.solution) {
                    labHTML += `
                        <details class="exercise-solution">
                            <summary><i class="fas fa-eye"></i> View Solution</summary>
                            <pre><code>${exercise.solution}</code></pre>
                        </details>
                    `;
                }
                
                labHTML += '</div>';
            });
            
            labHTML += '</div>';
        }
        
        labHTML += '</div>';
        return labHTML;
    }

    setupContentEventListeners() {
        // Handle expand/collapse buttons
        document.querySelectorAll('.task-expand-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const taskId = e.target.closest('.task-expand-btn').dataset.taskId;
                this.toggleTaskContent(taskId);
            });
        });
    }

    toggleTaskContent(taskId) {
        const contentElement = document.getElementById(`content-${taskId}`);
        const buttonElement = document.querySelector(`[data-task-id="${taskId}"].task-expand-btn`);
        
        if (contentElement.style.display === 'none') {
            contentElement.style.display = 'block';
            buttonElement.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Content';
        } else {
            contentElement.style.display = 'none';
            buttonElement.innerHTML = '<i class="fas fa-chevron-down"></i> View Content';
        }
    }

    getTaskIcon(type) {
        const icons = {
            'coding': '💻',
            'lab': '🔬',
            'theory': '📚',
            'project': '🚀',
            'competition': '🏁'
        };
        return icons[type] || '📝';
    }

    calculateWeekProgress(phaseIndex, weekIndex) {
        const week = this.curriculum[phaseIndex].weeks[weekIndex];
        const completed = week.tasks.filter(task => 
            this.progress.completedTasks.includes(task.id)
        ).length;
        const total = week.tasks.length;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        return { completed, total, percentage };
    }

    toggleTask(taskId, isCompleted) {
        if (isCompleted) {
            if (!this.progress.completedTasks.includes(taskId)) {
                this.progress.completedTasks.push(taskId);
                this.progress.lastActivity = new Date().toISOString();
                
                // Add estimated hours to total time
                const task = this.findTaskById(taskId);
                if (task) {
                    this.progress.totalHours += task.estimatedHours;
                }
            }
        } else {
            const index = this.progress.completedTasks.indexOf(taskId);
            if (index > -1) {
                this.progress.completedTasks.splice(index, 1);
                
                // Subtract estimated hours from total time
                const task = this.findTaskById(taskId);
                if (task) {
                    this.progress.totalHours = Math.max(0, this.progress.totalHours - task.estimatedHours);
                }
            }
        }
        
        this.saveProgress();
        this.updateStats();
        this.updateAchievements();
        this.renderCurriculum();
    }

    findTaskById(taskId) {
        for (const phase of this.curriculum) {
            for (const week of phase.weeks) {
                const task = week.tasks.find(t => t.id === taskId);
                if (task) return task;
            }
        }
        return null;
    }

    updateStats() {
        const totalTasks = this.curriculum.reduce((acc, phase) => 
            acc + phase.weeks.reduce((weekAcc, week) => weekAcc + week.tasks.length, 0), 0
        );
        
        const completedTasks = this.progress.completedTasks.length;
        const overallPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        document.getElementById('completed-tasks').textContent = completedTasks;
        document.getElementById('total-tasks').textContent = totalTasks;
        document.getElementById('overall-percentage').textContent = `${overallPercentage}%`;
        document.getElementById('overall-progress-fill').style.width = `${overallPercentage}%`;
        document.getElementById('current-streak').textContent = `${this.calculateStreak()} days`;
        document.getElementById('time-invested').textContent = `${this.progress.totalHours} hours`;
    }

    calculateStreak() {
        // Simple streak calculation based on last activity
        if (!this.progress.lastActivity) return 0;
        
        const lastActivity = new Date(this.progress.lastActivity);
        const today = new Date();
        const diffTime = Math.abs(today - lastActivity);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays <= 1 ? this.progress.streak || 1 : 0;
    }

    updateAchievements() {
        const completedTasks = this.progress.completedTasks.length;
        const codingTasks = this.progress.completedTasks.filter(taskId => {
            const task = this.findTaskById(taskId);
            return task && task.type === 'coding';
        }).length;
        
        const labTasks = this.progress.completedTasks.filter(taskId => {
            const task = this.findTaskById(taskId);
            return task && task.type === 'lab';
        }).length;

        // Check achievements
        if (completedTasks >= 1) this.achievements.find(a => a.id === 'first_task').unlocked = true;
        if (codingTasks >= 10) this.achievements.find(a => a.id === 'coding_master').unlocked = true;
        if (labTasks >= 15) this.achievements.find(a => a.id === 'lab_expert').unlocked = true;
        if (this.calculateStreak() >= 7) this.achievements.find(a => a.id === 'streak_7').unlocked = true;

        // Render achievements
        const achievementList = document.getElementById('achievement-list');
        achievementList.innerHTML = this.achievements.map(achievement => `
            <div class="achievement ${achievement.unlocked ? 'unlocked' : ''}">
                <span class="achievement-icon">${achievement.icon}</span>
                <div class="achievement-text">
                    <strong>${achievement.title}</strong><br>
                    <small>${achievement.description}</small>
                </div>
            </div>
        `).join('');
    }

    saveProgress() {
        localStorage.setItem('cyberSecProgress', JSON.stringify(this.progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('cyberSecProgress');
        return saved ? JSON.parse(saved) : {
            completedTasks: [],
            totalHours: 0,
            streak: 0,
            lastActivity: null
        };
    }

    saveNotes() {
        const notes = document.getElementById('quick-notes').value;
        localStorage.setItem('quickNotes', notes);
    }

    loadNotes() {
        const saved = localStorage.getItem('quickNotes');
        if (saved) {
            document.getElementById('quick-notes').value = saved;
        }
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CyberSecTracker();
});
