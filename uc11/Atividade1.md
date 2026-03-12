# 🪄CT001 - Cadastro de Usuário 

## Objetivo | Verificar se o sistema cadastra usuário com dados válidos

## **Pré-condições:**
- Sistema aberto na tela de cadastro
- Usuário não possui cadastro
- Verificar se Usuario ja esta cadastrado no sistema. 

## **Passos:**
1. Digitar nome de usuário: "joaosilva"
2. Digitar senha: "123456"
3. Clicar no botão "Cadastrar"
4. Verificar se Usuario ja esta cadastrado no sistema. 

## **Resultado esperado:**
- ✅ Mensagem: "Cadastro realizado com sucesso!"
- ✅ Usuário redirecionado para tela de login

---

## 📜 **Casos de Teste | Aplicativo Cadastro**  

### **Caso de Teste | Cadastro de Usuário**  
| ID | CT001 |
|----|-------|
| Descrição | Testar se o usuário consegue se cadastrar com sucesso. |
| Passos | 1. Acessar a tela de cadastro<br>2. Preencher nome, e-mail e senha<br>3. Confirmar cadastro |
| Dados de Entrada | Nome: João Silva, E-mail: joao@email.com, Senha: 123456 |
| Saída Esperada | Conta criada com sucesso. |
| Verificar | Verificar se Usuario ja esta cadastrado no sistema. 

---

### **Caso de Teste | CT002 - Usuário Duplicado**  
| ID | CT002 |
|----|-------|
| Descrição | Validar que não permite cadastrar usuário já existente |
| Pré-condição | Usuário "joaosilva" já cadastrado no sistema |
| Passos | 1. Acessar tela de cadastro<br>2. Digitar "joaosilva" e senha "123"<br>3. Clicar em cadastrar |
| Resultado Esperado | ❌ Mensagem: "Usuário já cadastrado!"<br>❌ Permanecer na tela de cadastro |
