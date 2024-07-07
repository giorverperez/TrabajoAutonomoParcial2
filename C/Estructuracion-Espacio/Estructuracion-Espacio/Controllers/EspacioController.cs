﻿using Estructuracion_Espacio.Data;
using Estructuracion_Espacio.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;


[Route("api/[controller]")]
[ApiController]
public class EspaciosController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EspaciosController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Espacios
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Espacio>>> GetEspacios()
    {
        return await _context.Espacio.ToListAsync();
    }

    // GET: api/Espacios/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Espacio>> GetEspacio(int id)
    {
        var espacio = await _context.Espacio.FindAsync(id);

        if (espacio == null)
        {
            return NotFound();
        }

        return espacio;
    }

    // PUT: api/Espacios/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> PutEspacio(int id, Espacio espacio)
    {
        if (id != espacio.Id)
        {
            return BadRequest();
        }

        _context.Entry(espacio).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!EspacioExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Espacios
    [HttpPost]
    public async Task<ActionResult<Espacio>> PostEspacio(Espacio espacio)
    {
        _context.Espacio.Add(espacio);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetEspacio), new { id = espacio.Id }, espacio);
    }

    // DELETE: api/Espacios/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEspacio(int id)
    {
        var espacio = await _context.Espacio.FindAsync(id);
        if (espacio == null)
        {
            return NotFound();
        }

        _context.Espacio.Remove(espacio);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool EspacioExists(int id)
    {
        return _context.Espacio.Any(e => e.Id == id);
    }
}