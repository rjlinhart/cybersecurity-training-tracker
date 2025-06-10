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
                            },                            {
                                id: "p1w1t3",
                                title: "Python Functions and Loops",
                                description: "Build 5 small Python programs using functions and loops",
                                type: "coding",
                                estimatedHours: 5,
                                content: {
                                    objectives: [
                                        "Create and use Python functions effectively",
                                        "Implement different types of loops (for, while)",
                                        "Build security-focused programs and utilities",
                                        "Practice code organization and best practices",
                                        "Develop problem-solving skills for cybersecurity"
                                    ],
                                    theory: `
                                        <h3>Python Functions and Control Flow</h3>
                                        <p>Functions and loops are fundamental building blocks for cybersecurity tools and automation scripts.</p>
                                        
                                        <h4>Functions in Python</h4>
                                        <pre><code>
def function_name(parameters):
    """Function documentation"""
    # Function body
    return result

# Example: Password strength checker
def check_password_strength(password):
    """Check if password meets security requirements"""
    score = 0
    if len(password) >= 8:
        score += 1
    if any(c.isupper() for c in password):
        score += 1
    if any(c.isdigit() for c in password):
        score += 1
    if any(c in "!@#$%^&*" for c in password):
        score += 1
    return score
                                        </code></pre>
                                        
                                        <h4>Loops for Automation</h4>
                                        <pre><code>
# For loop - iterate over sequences
for item in sequence:
    process(item)

# While loop - continue until condition is false
while condition:
    do_something()

# Example: Port scanner concept
for port in range(1, 1024):
    if is_port_open(target, port):
        print(f"Port {port} is open")
                                        </code></pre>
                                        
                                        <h4>Security Programming Patterns</h4>
                                        <ul>
                                            <li><strong>Input Validation:</strong> Always validate user input</li>
                                            <li><strong>Error Handling:</strong> Use try/except blocks</li>
                                            <li><strong>Logging:</strong> Track program execution for security</li>
                                            <li><strong>Modular Design:</strong> Break complex tasks into functions</li>
                                        </ul>
                                    `,
                                    lab: {
                                        title: "Security-Focused Python Programming Lab",
                                        instructions: [
                                            "Create a new Python file for each program",
                                            "Test each function thoroughly",
                                            "Add documentation and comments",
                                            "Consider security implications of your code"
                                        ],
                                        exercises: [
                                            {
                                                title: "Program 1: Password Generator",
                                                task: "Create a secure password generator with customizable options",
                                                requirements: [
                                                    "Function to generate random passwords",
                                                    "Options for length, uppercase, numbers, symbols",
                                                    "Ensure cryptographically secure randomness",
                                                    "Test with different configurations"
                                                ],
                                                solution: `
import random
import string
import secrets

def generate_password(length=12, use_uppercase=True, use_numbers=True, use_symbols=True):
    """Generate a cryptographically secure password"""
    characters = string.ascii_lowercase
    
    if use_uppercase:
        characters += string.ascii_uppercase
    if use_numbers:
        characters += string.digits
    if use_symbols:
        characters += "!@#$%^&*"
    
    # Use secrets for cryptographic security
    password = ''.join(secrets.choice(characters) for _ in range(length))
    return password

def test_password_generator():
    """Test the password generator with different settings"""
    print("Testing Password Generator:")
    print(f"Simple: {generate_password(8, False, False, False)}")
    print(f"Complex: {generate_password(16, True, True, True)}")
    print(f"Numbers only: {generate_password(10, False, True, False)}")

# Run tests
test_password_generator()
                                                `
                                            },
                                            {
                                                title: "Program 2: Log File Analyzer",
                                                task: "Create a program to analyze security logs and detect suspicious patterns",
                                                requirements: [
                                                    "Function to read and parse log files",
                                                    "Detect failed login attempts",
                                                    "Count unique IP addresses",
                                                    "Report suspicious activity patterns"
                                                ],
                                                solution: `
import re
from collections import Counter

def analyze_log_file(filename):
    """Analyze security logs for suspicious activity"""
    failed_logins = []
    ip_addresses = []
    
    try:
        with open(filename, 'r') as file:
            for line in file:
                # Look for failed login patterns
                if "FAILED" in line.upper() or "INVALID" in line.upper():
                    failed_logins.append(line.strip())
                
                # Extract IP addresses (simple regex)
                ip_match = re.search(r'(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})', line)
                if ip_match:
                    ip_addresses.append(ip_match.group(1))
    
    except FileNotFoundError:
        print(f"Log file {filename} not found")
        return
    
    # Analysis
    print(f"Total failed logins: {len(failed_logins)}")
    print(f"Unique IP addresses: {len(set(ip_addresses))}")
    
    # Top suspicious IPs
    ip_counts = Counter(ip_addresses);
    print("Top 5 most active IPs:")
    for ip, count in ip_counts.most_common(5):
        print(f"  {ip}: {count} requests")

# Create sample log file for testing
def create_sample_log():
    """Create a sample log file for testing"""
    sample_logs = [
        "2025-06-10 10:15:32 LOGIN 192.168.1.100 user1 SUCCESS",
        "2025-06-10 10:16:45 LOGIN 192.168.1.200 user2 FAILED",
        "2025-06-10 10:17:12 LOGIN 192.168.1.200 admin FAILED",
        "2025-06-10 10:18:33 LOGIN 192.168.1.100 user1 SUCCESS",
        "2025-06-10 10:19:44 LOGIN 10.0.0.50 root FAILED",
    ]
    
    with open('sample_security.log', 'w') as file:
        for log in sample_logs:
            file.write(log + '\n')

# Run analysis
create_sample_log()
analyze_log_file('sample_security.log')
                                                `
                                            },
                                            {
                                                title: "Program 3: Network Port Checker",
                                                task: "Build a simple port connectivity checker for security assessments",
                                                requirements: [
                                                    "Function to check if a port is open on a host",
                                                    "Scan multiple common ports",
                                                    "Handle timeouts and errors gracefully",
                                                    "Report results in a clear format"
                                                ],
                                                solution: `
import socket
import sys
from datetime import datetime

def check_port(host, port, timeout=3):
    """Check if a specific port is open on a host"""
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(timeout)
        result = sock.connect_ex((host, port))
        sock.close()
        return result == 0  # 0 means connection successful
    except socket.gaierror:
        return False

def scan_common_ports(host):
    """Scan common ports on a target host"""
    common_ports = {
        21: "FTP",
        22: "SSH", 
        23: "Telnet",
        25: "SMTP",
        53: "DNS",
        80: "HTTP",
        110: "POP3",
        143: "IMAP",
        443: "HTTPS",
        993: "IMAPS",
        995: "POP3S"
    }
    
    print(f"Scanning {host} for open ports...")
    print(f"Started at: {datetime.now()}")
    console.log("-" * 50)
    
    open_ports = []
    
    for port, service in common_ports.items():
        if check_port(host, port):
            print(f"Port {port:5d} ({service:8s}) - OPEN")
            open_ports.append((port, service))
        else:
            print(f"Port {port:5d} ({service:8s}) - CLOSED")
    
    print("-" * 50)
    print(f"Scan completed. Found {len(open_ports)} open ports.")
    return open_ports

# Example usage (scan localhost)
if __name__ == "__main__":
    target = "127.0.0.1"  # localhost
    scan_common_ports(target)
                                                `
                                            }
                                        ]
                                    },
                                    resources: [
                                        {
                                            title: "Python Functions Documentation",
                                            url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
                                            type: "documentation"
                                        },
                                        {
                                            title: "Python Security Best Practices",
                                            url: "https://python.org/dev/security/",
                                            type: "security"
                                        },
                                        {
                                            title: "Automate the Boring Stuff with Python",
                                            url: "https://automatetheboringstuff.com/",
                                            type: "tutorial"
                                        }
                                    ]
                                }
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
    }    init() {
        this.renderCurriculum();
        this.renderSetupGuides();
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

    renderSetupGuides() {
        const setupElement = document.getElementById('phase-setup');
        if (!setupElement) return;

        const setupHTML = `
            <div class="setup-guides-container">
                <div class="setup-header">
                    <h2><i class="fas fa-rocket"></i> Setup Guides</h2>
                    <p class="setup-subtitle">Get started with the Cybersecurity Training Tracker on your platform</p>
                </div>

                <div class="setup-grid">
                    <div class="setup-card macos-setup">
                        <div class="setup-card-header">
                            <i class="fab fa-apple"></i>
                            <h3>macOS Setup</h3>
                        </div>
                        <div class="setup-card-content">
                            <p>Complete setup guide for macOS users with VS Code integration</p>
                            <ul class="setup-features">
                                <li><i class="fas fa-check"></i> Homebrew installation</li>
                                <li><i class="fas fa-check"></i> VS Code configuration</li>
                                <li><i class="fas fa-check"></i> Development tools setup</li>
                                <li><i class="fas fa-check"></i> Automated script included</li>
                            </ul>
                            <div class="setup-buttons">
                                <button class="setup-btn primary" onclick="app.showSetupContent('macos')">
                                    <i class="fas fa-book-open"></i> View Guide
                                </button>
                                <button class="setup-btn secondary" onclick="app.downloadScript('macos')">
                                    <i class="fas fa-download"></i> Download Script
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="setup-card windows-setup">
                        <div class="setup-card-header">
                            <i class="fab fa-windows"></i>
                            <h3>Windows Setup</h3>
                        </div>
                        <div class="setup-card-content">
                            <p>PowerShell-based setup guide for Windows users</p>
                            <ul class="setup-features">
                                <li><i class="fas fa-check"></i> PowerShell automation</li>
                                <li><i class="fas fa-check"></i> Git and Python setup</li>
                                <li><i class="fas fa-check"></i> VS Code integration</li>
                                <li><i class="fas fa-check"></i> Troubleshooting guide</li>
                            </ul>
                            <div class="setup-buttons">
                                <button class="setup-btn primary" onclick="app.showSetupContent('windows')">
                                    <i class="fas fa-book-open"></i> View Guide
                                </button>
                                <button class="setup-btn secondary" onclick="app.downloadScript('windows')">
                                    <i class="fas fa-download"></i> Download Script
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="setup-card linux-setup">
                        <div class="setup-card-header">
                            <i class="fab fa-linux"></i>
                            <h3>Linux Setup</h3>
                        </div>
                        <div class="setup-card-content">
                            <p>Terminal-based setup for Linux distributions</p>
                            <ul class="setup-features">
                                <li><i class="fas fa-check"></i> Package manager commands</li>
                                <li><i class="fas fa-check"></i> Git and Python3 setup</li>
                                <li><i class="fas fa-check"></i> Development environment</li>
                                <li><i class="fas fa-check"></i> Cross-distribution support</li>
                            </ul>
                            <div class="setup-buttons">
                                <button class="setup-btn primary" onclick="app.showSetupContent('linux')">
                                    <i class="fas fa-book-open"></i> View Guide
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="setup-card quick-start">
                        <div class="setup-card-header">
                            <i class="fas fa-rocket"></i>
                            <h3>Quick Start</h3>
                        </div>
                        <div class="setup-card-content">
                            <p>Already have the prerequisites? Get started immediately</p>
                            <div class="quick-commands">
                                <div class="command-block">
                                    <label>Clone Repository:</label>
                                    <code>git clone https://github.com/rjlinhart/cybersec-training-tracker.git</code>
                                    <button class="copy-btn" onclick="app.copyToClipboard('git clone https://github.com/rjlinhart/cybersec-training-tracker.git')">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <div class="command-block">
                                    <label>Start Server:</label>
                                    <code>python3 -m http.server 8000</code>
                                    <button class="copy-btn" onclick="app.copyToClipboard('python3 -m http.server 8000')">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <div class="command-block">
                                    <label>Open Browser:</label>
                                    <code>http://localhost:8000</code>
                                    <button class="copy-btn" onclick="app.copyToClipboard('http://localhost:8000')">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="setup-help-section">
                    <h3><i class="fas fa-life-ring"></i> Need Help?</h3>
                    <div class="help-grid">
                        <div class="help-item">
                            <i class="fas fa-bug"></i>
                            <h4>Troubleshooting</h4>
                            <p>Common issues and their solutions</p>
                            <a href="#" onclick="app.showTroubleshooting()">View Solutions</a>
                        </div>
                        <div class="help-item">
                            <i class="fas fa-question-circle"></i>
                            <h4>FAQ</h4>
                            <p>Frequently asked questions</p>
                            <a href="#" onclick="app.showFAQ()">View FAQ</a>
                        </div>
                        <div class="help-item">
                            <i class="fab fa-github"></i>
                            <h4>GitHub Issues</h4>
                            <p>Report bugs or request features</p>
                            <a href="https://github.com/rjlinhart/cybersec-training-tracker/issues" target="_blank">Open Issue</a>
                        </div>
                    </div>
                </div>

                <!-- Setup content modals will be inserted here -->
                <div id="setup-modal" class="setup-modal" style="display: none;">
                    <div class="setup-modal-content">
                        <div class="setup-modal-header">
                            <h3 id="setup-modal-title">Setup Guide</h3>
                            <button class="setup-modal-close" onclick="app.closeSetupModal()">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="setup-modal-body" id="setup-modal-body">
                            <!-- Content will be loaded here -->
                        </div>
                    </div>
                </div>
            </div>
        `;

        setupElement.innerHTML = setupHTML;
    }

    showSetupContent(platform) {
        const modal = document.getElementById('setup-modal');
        const title = document.getElementById('setup-modal-title');
        const body = document.getElementById('setup-modal-body');
        
        let content = '';
        
        switch(platform) {
            case 'macos':
                title.textContent = '🍎 macOS Setup Guide';
                content = this.getMacOSSetupContent();
                break;
            case 'windows':
                title.textContent = '🪟 Windows Setup Guide';
                content = this.getWindowsSetupContent();
                break;
            case 'linux':
                title.textContent = '🐧 Linux Setup Guide';
                content = this.getLinuxSetupContent();
                break;
        }
        
        body.innerHTML = content;
        modal.style.display = 'flex';
    }

    getMacOSSetupContent() {
        return `
            <div class="setup-guide-content">
                <h4>📋 Prerequisites</h4>
                <ul>
                    <li>macOS 10.14 (Mojave) or later</li>
                    <li>At least 4GB of RAM</li>
                    <li>2GB of free disk space</li>
                    <li>Internet connection</li>
                </ul>

                <h4>🛠️ Step 1: Install Required Software</h4>
                <div class="step-content">
                    <h5>Install Homebrew (Package Manager)</h5>
                    <div class="command-block">
                        <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code>
                        <button class="copy-btn" onclick="app.copyToClipboard('/bin/bash -c \\"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\\"')">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>

                    <h5>Install Git, Python 3, and Node.js</h5>
                    <div class="command-block">
                        <code>brew install git python3 node</code>
                        <button class="copy-btn" onclick="app.copyToClipboard('brew install git python3 node')">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>

                    <h5>Install Visual Studio Code</h5>
                    <ol>
                        <li>Download VS Code from <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a></li>
                        <li>Extract the .zip file to Applications folder</li>
                        <li>Open VS Code, press <kbd>Cmd+Shift+P</kbd>, type "shell command", and select "Install 'code' command in PATH"</li>
                    </ol>
                </div>

                <h4>📁 Step 2: Clone the Repository</h4>
                <div class="command-block">
                    <code>git clone https://github.com/rjlinhart/cybersec-training-tracker.git<br>cd cybersec-training-tracker</code>
                    <button class="copy-btn" onclick="app.copyToClipboard('git clone https://github.com/rjlinhart/cybersec-training-tracker.git\\ncd cybersec-training-tracker')">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>

                <h4>🚀 Step 3: Start the Application</h4>
                <div class="command-block">
                    <code>python3 -m http.server 8000</code>
                    <button class="copy-btn" onclick="app.copyToClipboard('python3 -m http.server 8000')">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <p>Then open your browser and go to <a href="http://localhost:8000" target="_blank">http://localhost:8000</a></p>

                <div class="setup-tip">
                    <i class="fas fa-lightbulb"></i>
                    <strong>Tip:</strong> For the complete detailed guide with VS Code setup, see <code>docs/MACOS_SETUP.md</code> in the project folder.
                </div>
            </div>
        `;
    }

    getWindowsSetupContent() {
        return `
            <div class="setup-guide-content">
                <h4>📋 Prerequisites</h4>
                <ul>
                    <li>Windows 10 or later</li>
                    <li>At least 4GB of RAM</li>
                    <li>2GB of free disk space</li>
                    <li>Internet connection</li>
                </ul>

                <h4>🛠️ Step 1: Install Required Software</h4>
                <div class="step-content">
                    <h5>Install Git for Windows</h5>
                    <ol>
                        <li>Download from <a href="https://git-scm.com/download/win" target="_blank">https://git-scm.com/download/win</a></li>
                        <li>Run the installer with default settings</li>
                        <li>Restart PowerShell after installation</li>
                    </ol>

                    <h5>Install Python 3</h5>
                    <ol>
                        <li>Download from <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a></li>
                        <li>During installation, check "Add Python to PATH"</li>
                        <li>Restart PowerShell after installation</li>
                    </ol>

                    <h5>Install Visual Studio Code (Optional)</h5>
                    <ol>
                        <li>Download from <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a></li>
                        <li>During installation, check "Add to PATH"</li>
                    </ol>
                </div>

                <h4>📁 Step 2: Clone the Repository</h4>
                <div class="command-block">
                    <code>git clone https://github.com/rjlinhart/cybersec-training-tracker.git<br>cd cybersec-training-tracker</code>
                    <button class="copy-btn" onclick="app.copyToClipboard('git clone https://github.com/rjlinhart/cybersec-training-tracker.git\\ncd cybersec-training-tracker')">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>

                <h4>🚀 Step 3: Start the Application</h4>
                <div class="command-block">
                    <code>python -m http.server 8000</code>
                    <button class="copy-btn" onclick="app.copyToClipboard('python -m http.server 8000')">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <p>Then open your browser and go to <a href="http://localhost:8000" target="_blank">http://localhost:8000</a></p>

                <div class="setup-tip">
                    <i class="fas fa-lightbulb"></i>
                    <strong>Tip:</strong> Use the automated setup script by running <code>.\\setup-windows.ps1</code> in the project folder.
                </div>
            </div>
        `;
    }

    getLinuxSetupContent() {
        return `
            <div class="setup-guide-content">
                <h4>📋 Prerequisites</h4>
                <ul>
                    <li>Any modern Linux distribution</li>
                    <li>At least 4GB of RAM</li>
                    <li>2GB of free disk space</li>
                    <li>Internet connection</li>
                </ul>

                <h4>🛠️ Step 1: Install Required Software</h4>
                <div class="step-content">
                    <h5>Ubuntu/Debian:</h5>
                    <div class="command-block">
                        <code>sudo apt update && sudo apt install git python3 python3-pip nodejs npm</code>
                        <button class="copy-btn" onclick="app.copyToClipboard('sudo apt update && sudo apt install git python3 python3-pip nodejs npm')">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>

                    <h5>CentOS/RHEL/Fedora:</h5>
                    <div class="command-block">
                        <code>sudo dnf install git python3 python3-pip nodejs npm</code>
                        <button class="copy-btn" onclick="app.copyToClipboard('sudo dnf install git python3 python3-pip nodejs npm')">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>

                    <h5>Arch Linux:</h5>
                    <div class="command-block">
                        <code>sudo pacman -S git python nodejs npm</code>
                        <button class="copy-btn" onclick="app.copyToClipboard('sudo pacman -S git python nodejs npm')">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </div>

                <h4>📁 Step 2: Clone the Repository</h4>
                <div class="command-block">
                    <code>git clone https://github.com/rjlinhart/cybersec-training-tracker.git<br>cd cybersec-training-tracker</code>
                    <button class="copy-btn" onclick="app.copyToClipboard('git clone https://github.com/rjlinhart/cybersec-training-tracker.git\\ncd cybersec-training-tracker')">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>

                <h4>🚀 Step 3: Start the Application</h4>
                <div class="command-block">
                    <code>python3 -m http.server 8000</code>
                    <button class="copy-btn" onclick="app.copyToClipboard('python3 -m http.server 8000')">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <p>Then open your browser and go to <a href="http://localhost:8000" target="_blank">http://localhost:8000</a></p>

                <div class="setup-tip">
                    <i class="fas fa-lightbulb"></i>
                    <strong>Tip:</strong> For VS Code installation, download the .deb or .rpm package from <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>
                </div>
            </div>
        `;
    }

    downloadScript(platform) {
        if (platform === 'macos') {
            const link = document.createElement('a');
            link.href = 'setup-macos.sh';
            link.download = 'setup-macos.sh';
            link.click();
        } else if (platform === 'windows') {
            const link = document.createElement('a');
            link.href = 'setup-windows.ps1';
            link.download = 'setup-windows.ps1';
            link.click();
        }
    }

    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showCopySuccess();
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showCopySuccess();
        }
    }

    showCopySuccess() {
        const toast = document.createElement('div');
        toast.className = 'copy-toast';
        toast.innerHTML = '<i class="fas fa-check"></i> Copied to clipboard!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 2000);
    }

    closeSetupModal() {
        document.getElementById('setup-modal').style.display = 'none';
    }

    showTroubleshooting() {
        this.showSetupContent('troubleshooting');
        document.getElementById('setup-modal-title').textContent = '🔧 Troubleshooting';
        document.getElementById('setup-modal-body').innerHTML = `
            <div class="setup-guide-content">
                <h4>Common Issues and Solutions</h4>
                
                <div class="troubleshoot-item">
                    <h5>❌ "python: command not found" or "python3: command not found"</h5>
                    <p><strong>Solution:</strong> Install Python from <a href="https://www.python.org/downloads/" target="_blank">python.org</a> and ensure it's added to your PATH.</p>
                </div>

                <div class="troubleshoot-item">
                    <h5>❌ "git: command not found"</h5>
                    <p><strong>Solution:</strong> Install Git from <a href="https://git-scm.com/downloads" target="_blank">git-scm.com</a></p>
                </div>

                <div class="troubleshoot-item">
                    <h5>❌ Port 8000 already in use</h5>
                    <p><strong>Solution:</strong> Use a different port: <code>python3 -m http.server 8080</code> then visit <a href="http://localhost:8080">localhost:8080</a></p>
                </div>

                <div class="troubleshoot-item">
                    <h5>❌ Application not loading properly</h5>
                    <p><strong>Solutions:</strong></p>
                    <ul>
                        <li>Check browser console for errors (F12 → Console)</li>
                        <li>Try incognito/private mode to bypass cache</li>
                        <li>Ensure all files downloaded properly</li>
                        <li>Verify you're accessing via http://localhost:8000 not file://</li>
                    </ul>
                </div>

                <div class="troubleshoot-item">
                    <h5>❌ Permission denied errors</h5>
                    <p><strong>Solution:</strong> On macOS/Linux, you may need to make the script executable: <code>chmod +x setup-macos.sh</code></p>
                </div>
            </div>
        `;
    }

    showFAQ() {
        this.showSetupContent('faq');
        document.getElementById('setup-modal-title').textContent = '❓ FAQ';
        document.getElementById('setup-modal-body').innerHTML = `
            <div class="setup-guide-content">
                <h4>Frequently Asked Questions</h4>
                
                <div class="faq-item">
                    <h5>Q: Do I need an internet connection to use the application?</h5>
                    <p>A: Only for the initial setup and downloading external resources. The main application runs locally.</p>
                </div>

                <div class="faq-item">
                    <h5>Q: Can I use this on a tablet or mobile device?</h5>
                    <p>A: Yes! The interface is responsive and works on tablets and phones, though the experience is optimized for desktop.</p>
                </div>

                <div class="faq-item">
                    <h5>Q: Is my progress saved automatically?</h5>
                    <p>A: Yes, all progress is automatically saved to your browser's local storage and persists between sessions.</p>
                </div>

                <div class="faq-item">
                    <h5>Q: Can I customize the curriculum content?</h5>
                    <p>A: Yes! The curriculum is defined in JavaScript and can be modified to suit your learning needs.</p>
                </div>

                <div class="faq-item">
                    <h5>Q: What if I don't have VS Code?</h5>
                    <p>A: VS Code is optional but recommended. You can use any text editor or IDE you prefer.</p>
                </div>

                <div class="faq-item">
                    <h5>Q: How do I update to newer versions?</h5>
                    <p>A: Use <code>git pull</code> in the project directory to get the latest updates from GitHub.</p>
                </div>
            </div>
        `;
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CyberSecTracker();
});
