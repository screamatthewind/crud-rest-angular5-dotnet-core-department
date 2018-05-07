using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using crud_rest_angular5_dotnet_core_department.Models;
using System.Web.Http.Cors;

namespace crud_rest_angular5_dotnet_core_department.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class DepartmentController : ApiController
    {
        private DepartmentContext db = new DepartmentContext();

        // GET: api/Department
        public IQueryable<Department> GetDepartment()
        {
            return db.Department;
        }

        // GET: api/Department/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult GetDepartment(short id)
        {
            Department department = db.Department.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            return Ok(department);
        }

        // PUT: api/Department/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDepartment(short id, Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != department.DepartmentID)
            {
                return BadRequest();
            }

            db.Entry(department).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Department
        [ResponseType(typeof(Department))]
        public IHttpActionResult PostDepartment(Department department)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.Department.Add(department);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = department.DepartmentID }, department);
        }

        // DELETE: api/Department/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult DeleteDepartment(short id)
        {
            Department department = db.Department.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            db.Department.Remove(department);
            db.SaveChanges();

            return Ok(department);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DepartmentExists(short id)
        {
            return db.Department.Count(e => e.DepartmentID == id) > 0;
        }
    }
}