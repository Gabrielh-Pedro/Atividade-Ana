# DevSecOps DAST Pipeline Demo

Este projeto demonstra a implementação de práticas DevSecOps, com foco específico em Testes Dinâmicos de Segurança de Aplicações (DAST) usando OWASP ZAP em um pipeline CI/CD com GitHub Actions.

## Estrutura do Projeto

- `index.html`: Aplicação web básica com vulnerabilidades intencionais de segurança
- `script.js`: JavaScript com vários problemas de segurança
- `styles.css`: Estilo para a aplicação de demonstração
- `.github/workflows/devsecops.yml`: Configuração do workflow do GitHub Actions para escaneamento DAST
- `.github/workflows/zap-rules.tsv`: Configuração de regras para OWASP ZAP

## Vulnerabilidades de Segurança Demonstradas

Esta aplicação de demonstração contém intencionalmente várias vulnerabilidades de segurança:

1. Cross-Site Scripting (XSS) no formulário de busca
2. Vulnerabilidade de Cross-Site Request Forgery (CSRF) no formulário de login
3. Referências inseguras a objetos diretos
4. Uso inseguro da função `eval()`
5. Armazenamento inseguro de informações sensíveis em localStorage

## Pipeline CI/CD com DAST

O workflow do GitHub Actions inclui:

1. **Job de Build**: Configura a aplicação e inicia um servidor web local
2. **Escaneamento DAST com OWASP ZAP**: 
   - Escaneamento de linha de base para verificações rápidas de segurança
3. **Análise de Relatório**:
   - Coleta relatórios do scanner
   - Gera um resumo de análise de segurança

## Como Executar

1. Clone este repositório para sua conta GitHub
2. Acesse a aba Actions no seu repositório
3. Ative os workflows no GitHub Actions (quando necessário)
4. Dispare manualmente o workflow usando o botão "Run workflow"
5. Revise os relatórios de segurança gerados nos artefatos do workflow

## Correções de Segurança Sugeridas

Após executar os escaneamentos DAST, você deve implementar correções como:

1. Adicionar sanitização de entrada para prevenir ataques XSS
2. Implementar tokens CSRF para formulários
3. Substituir `eval()` por alternativas mais seguras
4. Implementar armazenamento seguro para dados sensíveis
5. Adicionar cabeçalhos apropriados de Content Security Policy

## Implementação de Correções de Segurança

Para corrigir as vulnerabilidades, veja a pasta `fixed-version` para uma implementação segura das mesmas funcionalidades.

## Referências

- [OWASP ZAP](https://www.zaproxy.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Actions para ZAP](https://github.com/marketplace/actions/zap-baseline-scan) 