# DevSecOps DAST Pipeline Demo

This project demonstrates the implementation of DevSecOps practices, specifically focusing on Dynamic Application Security Testing (DAST) using OWASP ZAP and Syhunt in a CI/CD pipeline with GitHub Actions.

## Project Structure

- `index.html`: Basic web application with intentional security vulnerabilities
- `script.js`: JavaScript with various security issues
- `styles.css`: Styling for the demo application
- `.github/workflows/devsecops.yml`: GitHub Actions workflow configuration for DAST scanning
- `.github/workflows/zap-rules.tsv`: Rules configuration for OWASP ZAP

## Security Vulnerabilities Demonstrated

This demo application intentionally contains several security vulnerabilities:

1. Cross-Site Scripting (XSS) in the search form
2. Cross-Site Request Forgery (CSRF) vulnerability in the login form
3. Insecure direct object references
4. Insecure use of `eval()` function
5. Unsafe storage of sensitive information in localStorage

## CI/CD Pipeline with DAST

The GitHub Actions workflow includes:

1. **Build Job**: Sets up the application and starts a local web server
2. **DAST Scanning with OWASP ZAP**: 
   - Baseline scan for quick security checks
   - Full scan for comprehensive analysis
3. **DAST Scanning with Syhunt**:
   - Performs dynamic scanning with Syhunt
4. **Report Analysis**:
   - Collects and combines reports from both scanners
   - Generates a security analysis summary

## How to Run

1. Push this code to a GitHub repository
2. Go to the Actions tab in your repository
3. Manually trigger the workflow using the "Run workflow" button
4. Review the generated security reports in the workflow artifacts

## Suggested Security Fixes

After running the DAST scans, you should implement fixes such as:

1. Adding input sanitization to prevent XSS attacks
2. Implementing CSRF tokens for forms
3. Replacing `eval()` with safer alternatives
4. Implementing secure storage for sensitive data
5. Adding proper Content Security Policy headers

## Security Fix Implementation

To address the vulnerabilities, see the `fixed-version` branch for a secure implementation of the same functionality.

## References

- [OWASP ZAP](https://www.zaproxy.org/)
- [Syhunt](https://www.syhunt.com/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Actions for ZAP](https://github.com/marketplace/actions/zap-baseline-scan)
- [Syhunt GitHub Integration](https://www.syhunt.com/en/index.php?n=Docs.SyhuntIntegrationGitHub) 