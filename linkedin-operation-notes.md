# Estado da alteração no LinkedIn

Em 13 de julho de 2026, a página administrativa `linkedin.com/company/oliversys/admin/` redirecionou para o ecrã de início de sessão do LinkedIn. A conta do utilizador aparece reconhecida, mas o processo permanece no estado “We’re signing you in” e ainda não abriu a administração da página. A submissão final foi explicitamente autorizada pelo utilizador, mas nenhum campo foi alterado ou submetido nesta sessão até este ponto.

Uma nova verificação mostrou que a barra de progresso avançou parcialmente, mas o LinkedIn continua no mesmo ecrã e não expõe um controlo de continuação. É necessária uma intervenção curta do utilizador no navegador autenticado caso o redirecionamento não termine automaticamente.

Após a autenticação, o LinkedIn abriu `https://www.linkedin.com/company/unavailable/` e mostrou: “This LinkedIn Page isn’t available. The Page you’re searching for no longer exists.” Isto indica que o endereço tentado `/company/oliversys/admin/` não corresponde ao identificador atual da página. A sessão está autenticada; o próximo passo é localizar a página criada ou regressar ao formulário de configuração onde os dados foram preenchidos.

O LinkedIn redirecionou depois para a administração correta da página existente: `https://www.linkedin.com/company/136115680/admin/dashboard/`. O título confirma “Oliversys: Company Page Admin”. A página existe e a conta autenticada possui acesso administrativo. O identificador correto é `136115680`; o slug público ainda pode não estar configurado como `oliversys`.

Na área `Edit Page → Details`, os campos atuais são: descrição vazia; URL do website vazia; setor “IT Services and IT Consulting”; tamanho “2-10 employees”; tipo “Self Owned”. O utilizador já confirmou anteriormente “2-10” e “Privately Held”, portanto o tipo precisa ser corrigido. O dashboard também solicita descrição e website. A alteração autorizada deve completar a descrição, manter o website em branco enquanto o site não estiver publicado e selecionar “Privately Held”.

A descrição institucional aprovada foi preenchida com 1.414/2.000 caracteres. A opção “My organization doesn’t have a website” foi assinalada, mantendo o endereço vazio até à publicação do site. O tamanho permanece “2-10 employees”. Falta mudar o tipo de “Self Owned” para “Privately Held”, guardar e confirmar o resultado.

O seletor de tipo de empresa foi ativado. Como o valor atual é “Self Owned” e “Privately Held” aparece três posições acima na lista, a seleção final será feita por teclado e confirmada visualmente antes de guardar.

O seletor foi focado novamente e o menu nativo foi acionado por teclado. A interface continua a mostrar “Self Owned” enquanto aguarda a mudança de opção; o próximo passo é subir três posições e confirmar.
