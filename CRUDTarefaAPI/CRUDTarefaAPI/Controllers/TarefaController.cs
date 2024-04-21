using CRUDTarefaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace CRUDTarefaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarefaController : ControllerBase
    {
        public readonly AppDBContext _appDBContext;

        public TarefaController(AppDBContext appDBContext) 
        {
            _appDBContext = appDBContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Tarefa>> Get()
        {
            List<Tarefa> tarefas = _appDBContext.Terefas.ToList();

            return Ok(tarefas);
        }

        [HttpGet("{id}")]
        public ActionResult<Tarefa> Get(string id)
        {
            Tarefa? tarefa = _appDBContext.Terefas.FirstOrDefault(x => x.Id == id);

            if (tarefa == null)
                return NotFound();

            return Ok(tarefa);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Tarefa tarefa)
        {
            if (string.IsNullOrWhiteSpace(tarefa.Id))
                tarefa.Id = Guid.NewGuid().ToString();

            _appDBContext.Terefas.Add(tarefa);

            _appDBContext.SaveChanges();

            return CreatedAtAction(nameof(Get), new { tarefa.Id }, tarefa);
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Tarefa tarefa)
        {
            if (id != tarefa.Id)
            {
                return BadRequest();
            }

            Tarefa? tarefaParaAlteracao = _appDBContext.Terefas.FirstOrDefault(x => x.Id == id);

            if(tarefaParaAlteracao == null)
            {
                return NotFound();
            }

            tarefaParaAlteracao.Nome = tarefa.Nome;
            tarefaParaAlteracao.Descricao = tarefa.Descricao;
            tarefaParaAlteracao.Status = tarefa.Status;

            _appDBContext.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            Tarefa? tarefaParaExclusao = _appDBContext.Terefas.FirstOrDefault(x => x.Id == id);

            if (tarefaParaExclusao == null)
            {
                return NotFound();
            }

            _appDBContext.Terefas.Remove(tarefaParaExclusao);

            _appDBContext.SaveChanges();

            return NoContent();
        }
    }
}
