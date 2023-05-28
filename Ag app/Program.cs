using Microsoft.OpenApi.Models;
using Ag_app.Data;
using Microsoft.EntityFrameworkCore;
using Ag_app.Repositories;
using Ag_app.Mappings;

namespace Ag_app
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllersWithViews();
            

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.AddServer(new OpenApiServer
                {
                    Description = "Development Server",
                    Url = "https://localhost:7270"
                });
            });

            builder.Services.AddDbContext<AgDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("AgConnectionString")));

            builder.Services.AddScoped<ICustomerRepository, SQLCustomerRepository>();
            builder.Services.AddScoped<IRequestRepository, SQLRequestRepository>();

            builder.Services.AddAutoMapper(typeof(AutoMapperProfiles));

            var app = builder.Build();

            app.UseSwagger().UseSwaggerUI();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=index}/{id?}");

            app.MapFallbackToFile("index.html");
            

            app.Run();
        }
    }
}