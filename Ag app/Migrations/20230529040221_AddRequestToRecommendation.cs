using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ag_app.Migrations
{
    /// <inheritdoc />
    public partial class AddRequestToRecommendation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "RequestId",
                table: "Recommendations",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_RequestId",
                table: "Recommendations",
                column: "RequestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recommendations_Requests_RequestId",
                table: "Recommendations",
                column: "RequestId",
                principalTable: "Requests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recommendations_Requests_RequestId",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_RequestId",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "RequestId",
                table: "Recommendations");
        }
    }
}
