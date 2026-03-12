<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Load environment variables
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value);
    }
}

$data = json_decode(file_get_contents('php://input'), true);

$restaurantName = isset($data['restaurantName']) ? trim($data['restaurantName']) : '';
$location = isset($data['ownerName']) ? trim($data['ownerName']) : '';
$email = isset($data['location']) ? trim($data['location']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$dailyCustomer = isset($data['dailyCustomer']) ? trim($data['dailyCustomer']) : '';

if (empty($restaurantName) || empty($location) || empty($email) || empty($phone) || empty($dailyCustomer)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // SMTP Configuration from .env
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USER'] ?? 'sohub.web@gmail.com';
    $mail->Password = $_ENV['SMTP_PASS'] ?? '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $_ENV['SMTP_PORT'] ?? 587;
    $mail->CharSet = 'UTF-8';

    // Email settings
    $mail->setFrom($_ENV['SMTP_USER'] ?? 'sohub.web@gmail.com', 'Clowee Partnership');
    $mail->addAddress($_ENV['ADMIN_EMAIL'] ?? 'hello@sohub.com.bd', 'Clowee Admin');
    $mail->addReplyTo($email, $restaurantName);

    $mail->isHTML(true);
    $mail->Subject = 'New Partnership Application - ' . $restaurantName;
    
    $mail->Body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
            .header { background: linear-gradient(135deg, #E291BE, #D67BA8); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; padding: 12px; background: #f5f5f5; border-left: 4px solid #E291BE; }
            .label { font-weight: bold; color: #E291BE; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🎉 New Partnership Application</h2>
            </div>
            <div class='content'>
                <p>A new restaurant has applied for Clowee partnership:</p>
                
                <div class='field'>
                    <div class='label'>Restaurant/Business Name:</div>
                    <div class='value'>" . htmlspecialchars($restaurantName) . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Restaurant Location:</div>
                    <div class='value'>" . htmlspecialchars($location) . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>" . htmlspecialchars($email) . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Phone Number:</div>
                    <div class='value'>" . htmlspecialchars($phone) . "</div>
                </div>
                
                <div class='field'>
                    <div class='label'>Daily Customer Count:</div>
                    <div class='value'>" . htmlspecialchars($dailyCustomer) . "</div>
                </div>
                
                <div class='footer'>
                    <p>This email was sent from Clowee Partnership Application Form</p>
                    <p><a href='https://clowee.sohub.com.bd'>https://clowee.sohub.com.bd</a></p>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";

    $mail->AltBody = "New Partnership Application\n\n" .
                     "Restaurant Name: $restaurantName\n" .
                     "Location: $location\n" .
                     "Email: $email\n" .
                     "Phone: $phone\n" .
                     "Daily Customers: $dailyCustomer";

    $mail->send();
    
    // Send confirmation email to customer
    $customerMail = new PHPMailer(true);
    $customerMail->isSMTP();
    $customerMail->Host = $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com';
    $customerMail->SMTPAuth = true;
    $customerMail->Username = $_ENV['SMTP_USER'] ?? 'sohub.web@gmail.com';
    $customerMail->Password = $_ENV['SMTP_PASS'] ?? '';
    $customerMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $customerMail->Port = $_ENV['SMTP_PORT'] ?? 587;
    $customerMail->CharSet = 'UTF-8';

    $customerMail->setFrom($_ENV['SMTP_USER'] ?? 'sohub.web@gmail.com', 'Clowee by i3 Technologies');
    $customerMail->addAddress($email, $restaurantName);
    $customerMail->isHTML(true);
    $customerMail->Subject = 'Thank You for Your Partnership Application - Clowee';
    
    $customerMail->Body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
            .header { background: linear-gradient(135deg, #E291BE, #D67BA8); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: #f5f5f5; padding: 15px; border-left: 4px solid #E291BE; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px; }
            .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #E291BE, #D67BA8); color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1 style='margin: 0; font-size: 28px;'>🎉 Thank You!</h1>
                <p style='margin: 10px 0 0 0; font-size: 16px;'>Your Partnership Application Has Been Received</p>
            </div>
            <div class='content'>
                <p>Dear <strong>" . htmlspecialchars($restaurantName) . "</strong>,</p>
                
                <p>Thank you for your interest in partnering with <strong>Clowee by i3 Technologies</strong>!</p>
                
                <p>We have successfully received your partnership application with the following details:</p>
                
                <div class='highlight'>
                    <strong>Restaurant/Business:</strong> " . htmlspecialchars($restaurantName) . "<br>
                    <strong>Location:</strong> " . htmlspecialchars($location) . "<br>
                    <strong>Phone:</strong> " . htmlspecialchars($phone) . "<br>
                    <strong>Daily Customers:</strong> " . htmlspecialchars($dailyCustomer) . "
                </div>
                
                <h3 style='color: #E291BE;'>What Happens Next?</h3>
                <ul style='line-height: 2;'>
                    <li>Our team will review your application within 1-2 business days</li>
                    <li>We'll evaluate your location's suitability for a Clowee machine</li>
                    <li>A representative will contact you to discuss the next steps</li>
                    <li>If approved, we'll schedule a site visit and installation</li>
                </ul>
                
                <p style='background: #fff3cd; padding: 15px; border-radius: 6px; border-left: 4px solid #ffc107;'>
                    <strong>⚡ Quick Reminder:</strong> Clowee operates on a 50-50 profit-sharing partnership model with zero investment required from your side!
                </p>
                
                <center>
                    <a href='https://clowee.sohub.com.bd' class='button'>Visit Our Website</a>
                </center>
                
                <p>If you have any questions, feel free to reply to this email or contact us:</p>
                <p>
                    📞 WhatsApp: <a href='https://wa.me/8801325886868'>+880 1325 886868</a><br>
                    📧 Email: support@i3technologies.com.bd
                </p>
                
                <div class='footer'>
                    <p><strong>Clowee by i3 Technologies</strong></p>
                    <p>Smart Claw Machine Partnership for Restaurants in Bangladesh</p>
                    <p><a href='https://clowee.sohub.com.bd'>https://clowee.sohub.com.bd</a></p>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";

    $customerMail->AltBody = "Dear $restaurantName,\n\n" .
                            "Thank you for your interest in partnering with Clowee by i3 Technologies!\n\n" .
                            "We have received your application and will contact you within 1-2 business days.\n\n" .
                            "Application Details:\n" .
                            "Restaurant: $restaurantName\n" .
                            "Location: $location\n" .
                            "Phone: $phone\n" .
                            "Daily Customers: $dailyCustomer\n\n" .
                            "Best regards,\n" .
                            "Clowee Team\n" .
                            "https://clowee.sohub.com.bd";

    $customerMail->send();
    
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully!']);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again.']);
}
?>
